
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const date = new Date();
const startButton = document.querySelector('button[data-start]');
let TIME ;

startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < date.getTime()) {
           alert('Please choose a date in the future');
        }
        startButton.disabled = false;
        console.log(selectedDates[0]); 
        TIME = selectedDates[0].getTime();
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


function timer(event) {
    console.log(convertMs(TIME-date.getTime()));
}

startButton.addEventListener('click', timer);

