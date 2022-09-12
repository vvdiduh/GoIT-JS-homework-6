const inputEl = document.querySelector('#validation-input');

const focusInput = (event) => {

    inputEl.classList.add('valid');

    const { dataset, value } = event.target;
    const requredLength = Number(dataset.length); 
    const valueLength = value.length;

    requredLength === valueLength ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');

}

inputEl.addEventListener('blur', focusInput) 