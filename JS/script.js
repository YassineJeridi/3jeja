let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function(){
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = function(){
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

const targetDate = new Date("2025-06-20"); // Target date: June 20, 2025

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function calculateTimeLeft() {
  const today = new Date();
  const diffInMs = targetDate - today;

  // Convert milliseconds to days, hours, minutes, and seconds
  const daysLeft = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((diffInMs % (1000 * 60)) / 1000);

  // Format the numbers with leading zeros
  daysElement.innerText = daysLeft.toString().padStart(3, "0");
  hoursElement.innerText = hoursLeft.toString().padStart(2, "0");
  minutesElement.innerText = minutesLeft.toString().padStart(2, "0");
  secondsElement.innerText = secondsLeft.toString().padStart(2, "0");
}

calculateTimeLeft();

// Update the counter every second
setInterval(calculateTimeLeft, 1000);
