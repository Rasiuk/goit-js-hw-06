const inputSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSize.addEventListener("input", changeFontSize);
function changeFontSize() {
  text.style.fontSize = `${inputSize.value}px`;
}
