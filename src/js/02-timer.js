
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateNow = Date.now();
const startButton = document.querySelector('button[data-start]');
const inputText = document.querySelector('#datetime-picker');
let TIME ;


startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < dateNow) {
            startButton.disabled = true;
            alert('Please choose a date in the future');
        } else {
            startButton.disabled = false;
            console.log(selectedDates[0]); 
            TIME = selectedDates[0].getTime();
        }
    },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
    return String(value).padStart(2, '0');
}

function timer(event) {
    startButton.disabled = true;
    inputText.disabled = true;
    const timer = setInterval(() => {
        const now = Date.now();
        const timerTime = convertMs(TIME - now);
        console.log(TIME - now);
        if (TIME - now <= 0) {
            clearInterval(timer);
            return;
        }
        document.querySelector('span[data-days]').textContent = addLeadingZero(timerTime.days);
        document.querySelector('span[data-hours]').textContent = addLeadingZero(timerTime.hours);
        document.querySelector('span[data-minutes]').textContent = addLeadingZero(timerTime.minutes);
        document.querySelector('span[data-seconds]').textContent = addLeadingZero(timerTime.seconds);
    }, 1000);
}

startButton.addEventListener('click', timer);

