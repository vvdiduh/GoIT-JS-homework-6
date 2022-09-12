function getRandomHexColor() {
  bodyBgColor.style.backgroundColor =
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBgColor = document.querySelector('body');
const btnChangeBg = document.querySelector('.change-color');

btnChangeBg.addEventListener ('click', getRandomHexColor)

