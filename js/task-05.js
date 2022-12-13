const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function onInputChange(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (nameOutput.textContent === "") {
    nameOutput.textContent = "Anonymous";
  }
}

input.addEventListener("input", onInputChange);
