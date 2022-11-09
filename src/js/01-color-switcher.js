const body = document.querySelector('body');
const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
const wrapperEl = document.createElement('div');
let timerId = null;
let isActive = false;
btnStopEl.disabled = true;

wrapperEl.classList.add('wrapper');
btnStartEl.classList.add('btn');
btnStopEl.classList.add('btn');

document.body.children[0].after(wrapperEl);
wrapperEl.append(btnStartEl, btnStopEl);

const onStartRandomBGColor = () => {
	if (isActive) {
		return;
	}
	isActive = true;

	body.style.backgroundColor = getRandomHexColor();
	btnStartEl.disabled = true;
	btnStopEl.disabled = false;
	timerId = setInterval(() => {
		body.style.backgroundColor = getRandomHexColor();
	}, 1000);
};

function onStopChangeBGColor() {
	clearInterval(timerId);
	isActive = false;
	btnStopEl.disabled = true;
	btnStartEl.disabled = false;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStartEl.addEventListener('click', onStartRandomBGColor);
btnStopEl.addEventListener('click', onStopChangeBGColor);