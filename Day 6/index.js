const button = document.querySelector(".btn");

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
  // Your code here
  //create a new arr and shuffle name arr
  const shuffledNames = [...arr].sort(() => Math.random() - 0.5);
  // create object stores arr
  const resultObject = {};

  arr.forEach((name, index) => {
    const newIndex = (index + 1) % arr.length;
    // Get the new name from the shuffled array, excluding the current name
    const newName =
      shuffledNames[newIndex] !== name
        ? shuffledNames[newIndex]
        : shuffledNames[(newIndex + 1) % arr.length];
    // Create a pair in the result object
    resultObject[name] = newName;
  });

  console.log("secret santa list", resultObject);
  return resultObject;
}

const result = generateSecretSantaPairs(people);

function displayResults() {
  // Clear existing content on the page
  document.body.innerHTML = "";

  // Display each key with its corresponding unique value as h1 elements on the HTML page
  for (const key of Object.keys(result)) {
    const h1Element = document.createElement("h1");
    h1Element.textContent = `${key}: ${result[key]}`;
    document.body.appendChild(h1Element);
  }
}

button.addEventListener("click", displayResults);

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
