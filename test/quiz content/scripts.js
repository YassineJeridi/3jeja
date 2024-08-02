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
    let timerStopped = false; // Flag to check if timer has been stopped
    const correctAnswer = 'C'; // The correct answer for the question
    const explanation = 'The capital of France is Paris, known for its rich history and cultural heritage.'; // Explanation for the correct answer
  
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
        if (timeRemaining <= 0) {
          clearInterval(interval);
          timerStopped = true;
          showPopup("Time's up! The correct answer is " + correctAnswer + ". " + explanation);
          return;
        }
        timeRemaining--;
        updateTimer();
        updateProgressBar();
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
        if (!timerStopped) {
          clearInterval(interval); // Stop the timer if an answer is selected
          timerStopped = true; // Set flag to indicate timer has been stopped
        }
        answerCards.forEach(card => card.classList.remove("selected"));
        card.classList.add("selected");
      });
    });
  
    submitBtn.addEventListener("click", () => {
      if (timerStopped) {
        const selectedCard = document.querySelector(".answer-card.selected");
        if (selectedCard) {
          // If an answer was selected, reveal it and the correct answer
          revealAnswer();
          showPopup(`You selected: ${selectedCard.querySelector("p").textContent}. The correct answer is ${correctAnswer}. ${explanation}`);
        } else {
          // If no answer was selected, just show the popup with the correct answer
          showPopup(`No answer selected. The correct answer is ${correctAnswer}. ${explanation}`);
        }
      }
    });
  
    popupClose.addEventListener("click", hidePopup);
  
    // Start the timer when the page loads
    startTimer();
  });
  