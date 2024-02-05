
const body = document.querySelector('body');
const btnColorBody = document.querySelector('.change-color');
const textColorName = document.querySelector('span');
btnColorBody.addEventListener('click', onBtnColorChange);
function onBtnColorChange() {
  textColorName.textContent = getRandomHexColor().toString()
  document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// //  const randomColor = Math.floor(Math.random() * options.length);
//   const selectColor = options[randomColor];
//   textColorName.textContent = selectColor.label;
//   document.body.style.backgroundColor = selectColor.color;
