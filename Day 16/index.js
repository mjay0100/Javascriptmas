const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
const newNameInput = document.getElementById("new-name");
const form = document.getElementById("form");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

const good = sorteesArr.filter((person) => person.hasBeenGood);
const notGood = sorteesArr.filter((person) => !person.hasBeenGood);

function addNewPerson(e) {
  e.preventDefault();
  const newName = newNameInput.value.trim();
  if (newName !== "") {
    // Add a new person with the default hasBeenGood value
    sorteesArr.push({ name: newName, hasBeenGood: true });
    newNameInput.value = "";
    createListItems();
  }
}

function createListItems() {
  const niceList = document.getElementById("nice-list");
  const naughtyList = document.getElementById("naughty-list");
  // Clear existing list items
  niceList.innerHTML = "";
  naughtyList.innerHTML = "";

  // Create list items dynamically
  sorteesArr.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.textContent = person.name;
    //new btn for person
    const newBtn = document.createElement("button");
    newBtn.textContent = "switch";

    newBtn.addEventListener("click", function () {
      person.hasBeenGood = !person.hasBeenGood;
      createListItems();
    });

    listItem.appendChild(newBtn);
    if (person.hasBeenGood) {
      niceList.appendChild(listItem);
    } else {
      naughtyList.appendChild(listItem);
    }
  });
}

form.addEventListener("submit", addNewPerson);
btn.addEventListener("click", createListItems);

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
