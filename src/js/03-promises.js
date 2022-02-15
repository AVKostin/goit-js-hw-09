import Notiflix from 'notiflix';

Notiflix.Notify.init({
	position: 'center-center',
	width: '460px',
	fontSize: '20px',
});

const formEl = document.querySelector('form');

formEl.addEventListener('submit', promiseSubmit);

function promiseSubmit(e) {
	e.preventDefault();

	const formElements = e.currentTarget.elements;

	let delay = Number(formElements.delay.value);
	let step = Number(formElements.step.value);
	let amount = Number(formElements.amount.value);

	for (let position = 1; position <= amount; position++) {
		delay += step;

		createPromise(position, delay)
			.then(({ position, delay }) =>
				Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
			)
			.catch(({ position, delay }) =>
				Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`),
			);
	}
}

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve({ position, delay });
			} else {
				reject({ position, delay });
			}
		}, delay);
	});
}
