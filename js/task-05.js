const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

const handleInputName = (event) => {
    // console.log(event.target.value);
    nameEl.textContent = event.target.value;
    if (nameEl.textContent === '') {
        nameEl.textContent = 'Anonymous';
    }
}

inputEl.addEventListener('input', handleInputName);
