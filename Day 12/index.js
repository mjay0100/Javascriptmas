const xmasGifts = [
  "guitar 🎸",
  "skates ⛸️",
  "bear 🧸",
  "magnet 🧲",
  "laptop 💻",
  "games console 🎮 ",
  "jewellery 💍",
  "kite 🪁",
];

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.
 **/

// using  bubblesort
let swappped;
function bubblesort(arr) {
  swappped = false;
  for (let i = 0; i < xmasGifts.length; i++) {
    if (arr[i] > arr[i + 1]) {
      swappped = true;
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
//do while
do {
  bubblesort(xmasGifts);
} while (swappped);

const sortedAZ = xmasGifts;
console.log("Koca: sortedAZ ", sortedAZ);
const sortedZA = [...sortedAZ].reverse();
console.log("Koca: sortedZA ", sortedZA);
// console.log("Z-A", xmasGifts.reverse());

const sortedContainer = document.querySelector(".sorted-container");
const unsortedContainer = document.querySelector(".unsorted-container");

sortedAZ.forEach((gift) => {
  const giftElement = document.createElement("div");
  giftElement.textContent = gift;
  sortedContainer.appendChild(giftElement);
});
sortedZA.forEach((gift) => {
  const giftElement = document.createElement("div");
  giftElement.textContent = gift;
  unsortedContainer.appendChild(giftElement);
});
