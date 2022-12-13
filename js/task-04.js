const value = document.querySelector("#value");
let counterValue = 0;
const incBtn = document.querySelector('button[data-action="increment');
const decBtn = document.querySelector('button[data-action="decrement');
const decrementClick = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incrementClick = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};
decBtn.addEventListener("click", decrementClick);
incBtn.addEventListener("click", incrementClick);
