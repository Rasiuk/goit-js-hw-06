function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const colorBackground = document.querySelector(".color");
btnChangeColor.addEventListener("click", onClickBtnChangeColor);
function onClickBtnChangeColor() {
  const color = getRandomHexColor();
  colorBackground.textContent = color;
  body.style.backgroundColor = `${color}`;
}
