const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 25;
  // to calculates how manys, hours, minutes and seconds are left, we must declare variables for the current day and target day
  const currentDate = new Date();
  const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

  // Calculate the time difference in milliseconds from today to target day i.e christmas
  const timeDifference = christmasDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days, minutes, and seconds
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  countdownDisplay.textContent = `There are ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes and ${secondsLeft} seconds`;
}

setInterval(() => {
  renderCountdown();
}, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

// Define the current date and the target date (December 24th)
// Define the current date and Christmas date
var currentDate = new Date();
var christmasDate = new Date(currentDate.getFullYear(), 11, 25); // Note: Month is 0-indexed, so 11 is December

// Check if Christmas has already occurred this year, if not, use next year's Christmas
if (currentDate > christmasDate) {
  christmasDate.setFullYear(currentDate.getFullYear() + 1);
}

// Calculate the time difference in milliseconds
var timeDifference = christmasDate.getTime() - currentDate.getTime();

// Convert milliseconds to days, minutes, and seconds
var daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
var hoursRemaining = Math.floor(
  (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
var minutesRemaining = Math.floor(
  (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
);
var secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

// Output the result
console.log(
  "Days: " +
    daysRemaining +
    " | Hours: " +
    hoursRemaining +
    " | Minutes: " +
    minutesRemaining +
    " | Seconds: " +
    secondsRemaining
);
