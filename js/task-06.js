const inputEl = document.querySelector('#validation-input');

const focusInput = (event) => {

    inputEl.classList.add('valid');

    const { dataset, value } = event.target;
    const requredLength = Number(dataset.length); 
    const valueLength = value.length;

    if (requredLength === valueLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
        return;
    }   

    if (requredLength > valueLength || requredLength < valueLength) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
        return;
    }
        

}

inputEl.addEventListener('blur', focusInput) 