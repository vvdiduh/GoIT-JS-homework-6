const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = Number(valueEl.textContent);

const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

decrementEl.addEventListener('click', decrement);

const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

incrementEl.addEventListener('click', increment);

console.log(typeof (counterValue));