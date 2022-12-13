const body = document.body;
const categories = body.children[1];
const numberOfCategory = categories.children.length;
console.log(`Number of categories: ${numberOfCategory}`);

const itemEl = document.querySelectorAll(".item");

itemEl.forEach((item) => {
  const categoryEl = item.firstElementChild.textContent;
  const elementsEl = item.lastElementChild.children.length;
  const message = `Category: ${categoryEl}
Elements: ${elementsEl}`;
  console.log(message);
});
