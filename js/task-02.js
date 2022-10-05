const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridientEl = document.querySelector("#ingredients")
// console.log(listIngridientEl);

const items = [];

ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listIngridientEl.append(listEl);
  listEl.classList.add("item");
  listEl.textContent = ingredient;
})

console.log(...items);

listIngridientEl.append(...items);
// console.log();
// for (const ingredient of ingredients) {
//   // console.log(ingredient);
//   const listEl = document.createElement("li");
//   listIngridientEl.append(listEl);
//   listEl.classList.add("item");
//   listEl.textContent = ingredient;
// }



