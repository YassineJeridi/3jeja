document.addEventListener("DOMContentLoaded", () => {
    const answerCards = document.querySelectorAll(".answer-card");
    const progress = document.getElementById("progress");
    const timerElement = document.getElementById("time");
    const submitBtn = document.querySelector(".submit-btn");
    const popup = document.getElementById("popup");
    const popupClose = document.querySelector(".popup-close");
    const popupMessage = document.getElementById("popup-message");
  
    let timeRemaining = 15; // 15 seconds timer
    let interval;
    const correctAnswer = 'C'; // The correct answer for the question
    const explanation = 'PEXA IS THE BEST.'; // Explanation for the correct answer
  
    function updateProgressBar() {
      const percentage = ((15 - timeRemaining) / 15) * 100;
      progress.style.width = percentage + "%";
    }
  
    function updateTimer() {
      const seconds = timeRemaining % 60;
      timerElement.textContent = `00:${seconds.toString().padStart(2, '0')}`;
    }
  
    function startTimer() {
      interval = setInterval(() => {
        timeRemaining--;
        updateTimer();
        updateProgressBar();
        if (timeRemaining <= 0) {
          clearInterval(interval);
          timeRemaining = 0;
          updateTimer();
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
      if (!selectedCard) {
        showPopup(`Time's up! The correct answer is ${correctAnswer}. ${explanation}`);
      } else {
        revealAnswer();
        showPopup(`You selected: ${selectedCard.querySelector("p").textContent}. The correct answer is ${correctAnswer}. ${explanation}`);
      }
    });
  
    popupClose.addEventListener("click", hidePopup);
  
    // Start the timer when the page loads
    startTimer();
  });
  