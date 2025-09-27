const header = document.querySelector('header');

const nav = document.querySelector('nav');

const bars = nav.querySelector('.bars');

const menu = nav.querySelector('ul');

const middleBar = bars.querySelector(':nth-child(2)');

document.querySelector('footer span:nth-of-type(1)').textContent = new Date().getFullYear();

let isOpened = false;

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

nav.addEventListener('click', (e) => {
	e.stopPropagation()
	if (isOpened) {
		menu.style.display = 'none';
		middleBar.style.width = '60%';
		isOpened = false;
	} else {
		menu.style.display = 'block';
		middleBar.style.width = '100%';
		isOpened = true;
	}
});

document.addEventListener('click', _ => {
	if (isOpened) {
		menu.style.display = 'none';
		middleBar.style.width = '60%';
		isOpened = false;
	}
});