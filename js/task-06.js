const input = document.querySelector("#validation-input");
input.addEventListener("blur", validInput);
function validInput() {
  if (input.dataset.length != input.value.length) {
    input.classList.remove("valid");
    return input.classList.add("invalid");
  }
  input.classList.remove("invalid");
  return input.classList.add("valid");
}
