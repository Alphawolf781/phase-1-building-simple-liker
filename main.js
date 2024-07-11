// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");

  
  if (!errorModal) {
    console.error("Error: Modal element not found.");
    return; // Exit early if modal is not found
  }

  
  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
          resolve("success");
        } else {
          reject("Error: Server request failed");
        }
      }, 500); 
    });
  }

  
  function handleEmptyHeartClick(heart) {
    mimicServerCall()
      .then(response => {
        heart.classList.add("activated-heart");
        heart.innerText = "♥";
      })
      .catch(error => {
        errorMessage.innerText = error;
        errorModal.classList.remove("hidden");
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  }

  
  function handleFullHeartClick(heart) {
    heart.classList.remove("activated-heart");
    heart.innerText = "♡";
  }

  
  const emptyHearts = document.querySelectorAll(".like-glyph");
  emptyHearts.forEach(heart => {
    heart.addEventListener("click", () => {
      handleEmptyHeartClick(heart);
    });
  });

  
  const fullHearts = document.querySelectorAll(".activated-heart");
  fullHearts.forEach(heart => {
    heart.addEventListener("click", () => {
      handleFullHeartClick(heart);
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
