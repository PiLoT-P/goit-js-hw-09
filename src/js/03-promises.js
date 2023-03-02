function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`✅ Fulfilled ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected ${position} in ${delay}ms`);
  }
  })

  setTimeout(() => {
    promise.then((nice) => {
      console.log(nice);
    })
      .catch((error) => {
        console.log(error);
      })
  }, delay);
}

const form = document.querySelector('.form');

function getPromise(event) {
  event.preventDefault();
  const inputValue = document.querySelectorAll('input');
  const emaunt = inputValue[2].value;
  let startDelay = Number(inputValue[0].value);
  const stepDelay = Number(inputValue[1].value);

  for (let i = 0; i < emaunt; i++){
    createPromise(i + 1, startDelay);
    startDelay += stepDelay;
  }
  
}

form.addEventListener('submit', getPromise);
