function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let randomColor;
stopButton.disabled = true;

function addColor(event) {
    startButton.disabled = true;
    stopButton.disabled = false;
    randomColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopAddColor(event) {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(randomColor);
}

startButton.addEventListener('click', addColor);
stopButton.addEventListener('click', stopAddColor);