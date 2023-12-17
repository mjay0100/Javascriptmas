/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const checkbox = document.querySelector("#vegetarian-input");
const num = document.querySelector("#num-input");
const btn = document.querySelector("#btn");
const food = document.querySelector("#food");
const form = document.querySelector("#form");
console.log(num);
// console.log(check)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.key === "Enter") {
    submitForm();
  }
  if (num.value <= 4) {
    food.textContent = "Ham";
  }
  if (num.value >= 5) {
    food.textContent = "Turkey";
  }
  if (num.value >= 50) {
    food.textContent = "chicken";
  }
  if (num.value >= 100) {
    food.textContent = "buffet";
  }
  if (checkbox.checked) {
    food.textContent = "Winter Squash Risotto";
  }
});
