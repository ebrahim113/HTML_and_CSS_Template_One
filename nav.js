const nav = document.querySelector('nav');

const bars = nav.querySelector('.bars');

const menu = nav.querySelector('ul');

const middleBar = bars.querySelector(':nth-child(2)');

document.querySelector('footer span:nth-of-type(1)').textContent = new Date().getFullYear();

let isOpened = false;

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