const header = document.querySelector('header');

const sections = {
	features: {
		color: "#fff"
	},
	services: {
		color: "#f6f6f6"
	},
	portfolio: {
		color: "#fff"
	},
	about: {
		color: "#f6f6f6"
	}
};

window.addEventListener('load', _ => {
	for (section in sections)
		sections[section].offsetTop = document.querySelector(`.${section}`).offsetTop;
});

window.addEventListener('scroll', _ => {
	const scrollYValue = scrollY + 64;
	for (section in sections) {
		const { offsetTop, color } = sections[section]
		if (scrollYValue >= offsetTop)
			header.style.backgroundColor = color;
	}
});