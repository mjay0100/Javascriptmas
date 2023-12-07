const wishlist = [
  "Macbook Air M2",
  "Air Jordans",
  "car",
  "chess board",
  "House",
  "perfume",
  // TODO: Add more items here
];

const list = document.querySelector(".wishlist");
const additem = document.querySelector("input");
const addItemButton = document.getElementById("add-item-btn");
const newItemInput = document.getElementById("new-item-input");
const msg = document.querySelector(".msg");

//function to display items from array
const displayArraylist = () => {
  wishlist.forEach((item) => {
    const wishlistItem = document.createElement("div");
    const wishItem = document.createElement("div");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-item");
    removeButton.textContent = "Remove item";

    // Create a container for the button and append the button to it
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("wishlist-item");
    buttonContainer.appendChild(removeButton);

    wishItem.textContent = item;
    wishlistItem.classList.add("wishlist-item");
    removeButton.addEventListener("click", removeItem);

    wishlistItem.appendChild(wishItem);
    wishlistItem.appendChild(removeButton);
    list.appendChild(wishlistItem);

    console.log(item);
  });
};

// Function to add a new item to the wishlist
function addItem() {
  const newItemText = newItemInput.value.trim();

  if (newItemText !== "") {
    const list = document.querySelector(".wishlist");

    // Create a new wishlist item
    const wishlistItem = document.createElement("div");
    wishlistItem.classList.add("wishlist-item");

    // Display the new item's text
    const itemText = document.createElement("div");
    itemText.textContent = newItemText;
    wishlistItem.appendChild(itemText);

    // Create a button for removing the new item
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-item");
    removeButton.textContent = "Remove item";

    // Attach the removeItem function to the click event of the button
    removeButton.addEventListener("click", removeItem);

    wishlistItem.appendChild(removeButton);

    // Append the new wishlist item to the container
    list.appendChild(wishlistItem);
    //displace message to user
    msg.textContent = "added item";
    setTimeout(() => {
      msg.textContent = "";
    }, 2000);
    // Clear the input field
    newItemInput.value = "";
  }
}

// Function to display wishlist items
function displayAllWishlist() {
  displayArraylist();
  addItemButton.addEventListener("click", addItem);
}
// Function to remove an item from the wishlist
function removeItem(event) {
  const wishlistItem = event.target.closest(".wishlist-item");

  if (wishlistItem) {
    wishlistItem.remove();
    //displace message to user

    msg.textContent = "removed item";

    setTimeout(() => {
      msg.textContent = "";
    }, 2000);
  }
}

// Call the function to display the wishlist
displayAllWishlist();

newItemInput.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.which === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    addItem();
  }
});
