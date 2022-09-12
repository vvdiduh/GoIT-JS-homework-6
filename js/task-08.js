const formEl = document.querySelector('.login-form');
// console.log(formEl);

const sendForm = (event) => {
    event.preventDefault();
    const { elements: { email, password }, } = event.target;

    if (email.value === '') {
        alert('введіть email');
        return
    } 

    if (password.value === '') {
        alert('введіть пароль');
        return
    } 

    const userData = {
        email: email.value,
        password: password.value,
    }

    console.log(userData);
    console.log('форму відправило ');

    formEl.reset();
}

formEl.addEventListener('submit', sendForm);
