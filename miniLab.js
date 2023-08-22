const h_1 = document.querySelector('h1');

h_1.textContent = "Some Text";

h_1.style.margin = "auto";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.style.display = "block";
  button.style.margin = "auto"; 
});

buttons[0].addEventListener("click", function() {
  h_1.style.display = "none"; 
});

buttons[1].addEventListener("click", function() {
    h_1.style.display = "block"; 
  });
  