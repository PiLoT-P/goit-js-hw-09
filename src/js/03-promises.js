function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected ${position} in ${delay}ms`);
      }
    }, delay)
  })
  return promise;
}
const form = document.querySelector('.form');

function getPromise(event) {
  event.preventDefault();
  const inputValue = document.querySelectorAll('input');
  const emaunt = inputValue[2].value;
  let startDelay = Number(inputValue[0].value);
  const stepDelay = Number(inputValue[1].value);

  for (let i = 0; i < emaunt; i++){
    createPromise(i + 1, startDelay)
      .then((nice) => {console.log(nice);})
    .catch((error) => {console.log(error);});
    startDelay += stepDelay;
  }
  
}

form.addEventListener('submit', getPromise);

