// Step 1: Uncomment to locate the heart elements
const articleHearts = document.querySelectorAll(".heart");

// Step 2: Uncomment to set up mock server communication
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}

// Step 3: Uncomment to listen for click events on like buttons and update DOM
document.addEventListener("DOMContentLoaded", function() {
  articleHearts.forEach(function(heart) {
    heart.addEventListener("click", async function(event) {
      const likeButton = event.target;
      await mimicServerCall();
      if (likeButton.className === "like-btn") {
        likeButton.innerText = "Liked!";
        likeButton.className = "liked-btn";
        likeButton.previousElementSibling.innerText = "You liked this!";
      } else {
        likeButton.innerText = "Like";
        likeButton.className = "like-btn";
        likeButton.previousElementSibling.innerText = "Like it?";
      }
    });
  });
});
