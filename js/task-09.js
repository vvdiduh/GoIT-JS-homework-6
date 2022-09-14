function getRandomHexColor() {
  bodyBgColor.style.backgroundColor =
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    textColorEl.textContent = bodyBgColor.style.backgroundColor;
}

const bodyBgColor = document.querySelector('body');
const btnChangeBg = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');


btnChangeBg.addEventListener ('click', getRandomHexColor)

