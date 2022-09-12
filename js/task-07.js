const fontSizeEl = document.querySelector('#font-size-control');
console.log(fontSizeEl);

const text = document.querySelector('#text');
// console.log(text);
// text.style.fontSize = '30px';


const editSize = (event) => {
    const { value } = event.target;
    const fontSize = `${value}px`;
    // console.log(fontSize);
    text.style.fontSize = fontSize;
    console.log(text);
}

fontSizeEl.addEventListener('input', editSize)