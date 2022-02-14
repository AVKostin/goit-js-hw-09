const body = document.querySelector('body');
const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
let timerId = null;
let isActive = false;

const onStartRandomBGColor = () => {
	if (isActive) {
		return;
	}
	isActive = true;

	body.style.backgroundColor = getRandomHexColor();

	timerId = setInterval(() => {
		body.style.backgroundColor = getRandomHexColor();
	}, 1000);
};

function onStopChangeBGColor() {
	clearInterval(timerId);
	isActive = false;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStartRef.addEventListener('click', onStartRandomBGColor);
btnStopRef.addEventListener('click', onStopChangeBGColor);
