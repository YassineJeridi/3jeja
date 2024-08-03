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

document.addEventListener("DOMContentLoaded", () => {
  const answerCards = document.querySelectorAll(".answer-card");
  const progress = document.getElementById("progress");
  const timerElement = document.getElementById("time");
  const submitBtn = document.querySelector(".submit-btn");
  const popup = document.getElementById("popup");
  const popupClose = document.querySelector(".popup-close");
  const popupMessage = document.getElementById("popup-message");

  let timeRemaining = 10; // 10 seconds timer
  let interval;
  let isAnswered = false; // Flag to check if an answer has been submitted
  const correctAnswer = 'C'; // The correct answer for the question
  const explanation = 'The capital of France is Paris, known for its rich history and cultural heritage.'; // Explanation for the correct answer

  function updateProgressBar() {
    const percentage = ((10 - timeRemaining) / 10) * 100;
    progress.style.width = percentage + "%";
    if (timeRemaining <= 3) {
      progress.style.backgroundColor = "red"; // Change to red near the end
    } else if (timeRemaining <= 6) {
      progress.style.backgroundColor = "orange"; // Change to orange in the middle
    } else {
      progress.style.backgroundColor = "green"; // Start with green
    }
  }

  function updateTimer() {
    const seconds = timeRemaining % 60;
    timerElement.textContent = `00:${seconds.toString().padStart(2, '0')}`;
    if (timeRemaining <= 5) {
      timerElement.classList.add('blinking'); // Add blinking effect
    } else {
      timerElement.classList.remove('blinking'); // Remove blinking effect
    }
  }

  function startTimer() {
    interval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateTimer();
        updateProgressBar();
      } else {
        clearInterval(interval);
        if (!isAnswered) {
          // Timer expired and no answer submitted
          showPopup(`Time's up! Question failed. The correct answer is ${correctAnswer}. ${explanation}`);
          revealAnswer();
        }
      }
    }, 1000);
  }

  function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'flex'; // Show the popup
  }

  function hidePopup() {
    popup.style.display = 'none'; // Hide the popup
  }

  function revealAnswer() {
    answerCards.forEach(card => {
      if (card.dataset.answer === correctAnswer) {
        card.classList.add("correct");
      }
    });
  }

  answerCards.forEach(card => {
    card.addEventListener("click", () => {
      answerCards.forEach(card => card.classList.remove("selected"));
      card.classList.add("selected");
    });
  });

  submitBtn.addEventListener("click", () => {
    clearInterval(interval); // Stop the timer
    const selectedCard = document.querySelector(".answer-card.selected");
    if (selectedCard) {
      revealAnswer();
      showPopup(`You selected: ${selectedCard.querySelector("p").textContent}. The correct answer is ${correctAnswer}. ${explanation}`);
    } else {
      showPopup(`Question failed. The correct answer is ${correctAnswer}. ${explanation}`);
    }
    isAnswered = true; // Mark as answered
  });

  popupClose.addEventListener("click", hidePopup);

  // Start the timer when the page loads
  startTimer();
});
