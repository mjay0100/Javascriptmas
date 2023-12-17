const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const container = document.querySelector(".elf-hangout-zone");

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  console.log("hi");
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
  const duplicatedElement = elf.cloneNode();
  duplicatedElement.textContent = "🧝";
  container.appendChild(duplicatedElement);
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
