import Notiflix from 'notiflix';

Notiflix.Notify.init({
	position: 'center-center',
	width: '460px',
	fontSize: '20px',
});

const formEl = document.querySelector('form');
const inputDelay = document.getElementById('delay');
const inputStep = document.getElementById('step');
const inputAmount = document.getElementById('amount');

const startBtn = document.querySelector('button[data-start]');
formEl.addEventListener('submit', promiseSubmit);

function promiseSubmit(e) {
	e.preventDefault();
	const formElements = e.currentTarget.elements;
	let delay = Number(formElements.delay.value);
	let step = Number(formElements.step.value);
	let amount = Number(formElements.amount.value);
	let totalDelay = 0;

	if (delay <= 0 || step <= 0 || amount <= 0) {
		Notiflix.Notify.failure('ВНИМАНИЕ!!! Введите целое число больше 0');
		return e.currentTarget.reset();
	}
	Notiflix.Notify.warning('Для новых расчётов перезагрузи страничку браузера F5');
	e.currentTarget.reset();
	for (let i = 1; i <= amount; i++) {
		totalDelay = delay + step * (i - 1);
		createPromise(i, totalDelay)
			.then(resolve => Notiflix.Notify.success(resolve))
			.catch(reject => Notiflix.Notify.failure(reject));
	}
	startBtn.disabled = true;
	inputDelay.disabled = true;
	inputStep.disabled = true;
	inputAmount.disabled = true;
}

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
			} else {
				reject(`❌ Rejected promise ${position} in ${delay}ms`);
			}
		}, delay);
	});
}
