import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
	fontSize: '18px',
	position: 'center-top',
	width: '600px',
});

const refs = {
	input: document.querySelector('#datetime-picker'),
	startBtn: document.querySelector('button[data-start]'),
	dataDays: document.querySelector('[data-days]'),
	dataHours: document.querySelector('[data-hours]'),
	dataMinutes: document.querySelector('[data-minutes]'),
	dataSeconds: document.querySelector('[data-seconds]'),
};
let selectedTime = 0;
let timerId = null;
disableBtnStart();
refs.startBtn.addEventListener('click', onClickBtnStart);

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onChange() {
		updateClockFace('00', '00', '00', '00');
		clearInterval(timerId);
	},
	onClose(selectedDates) {
		if (selectedDates[0] <= options.defaultDate) {
			Notiflix.Notify.failure('ВНИМАНИЕ!!! Выберите дату и время в будущем периоде!');
			return disableBtnStart();
		}
		Notiflix.Notify.success('Верный выбор! Для запуска обратного отсчёта жми START');
		refs.startBtn.removeAttribute('disabled');
		selectedTime = selectedDates[0].getTime();
	},
};

flatpickr(refs.input, options);

function disableBtnStart() {
	refs.startBtn.setAttribute('disabled', true);
}

function onClickBtnStart() {
	timerId = setInterval(() => {
		const currentTime = Date.now();
		const deltaTime = selectedTime - currentTime;
		const { days, hours, minutes, seconds } = convertMs(deltaTime);
		updateClockFace(days, hours, minutes, seconds);

		if (days < 1 && hours < 1 && minutes < 1 && seconds < 1) {
			clearInterval(timerId);
		}
	}, 1000);
	disableBtnStart();
}

function updateClockFace(days, hours, minutes, seconds) {
	refs.dataDays.textContent = days;
	refs.dataHours.textContent = hours;
	refs.dataMinutes.textContent = minutes;
	refs.dataSeconds.textContent = seconds;
}

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

function convertMs(ms) {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const days = Math.floor(ms / day);
	const hours = Math.floor((ms % day) / hour);
	const minutes = Math.floor(((ms % day) % hour) / minute);
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}
