const startButton = document.querySelector("#startButton");
const contactButton = document.querySelector("#contactButton");
const projectButtons = document.querySelectorAll(".projectButton");

/* Explore My Work */
startButton.addEventListener("click", function() {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});

/* Contact button */
contactButton.addEventListener("click", function() {
  contactButton.textContent = "Hello! 👋";
});

/* Project buttons */
projectButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    button.textContent = "Project Selected 🚀";
  });
});
