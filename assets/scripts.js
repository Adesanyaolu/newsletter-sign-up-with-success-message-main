const form = document.querySelector("form");
const card_1 = document.querySelector(".wholeBody");
const card_2 = document.querySelector(".successState");
const inputBox = document.querySelector("#email");
const sucessButton = document.querySelector(".sucessButton");
const userEmail = document.getElementById("userEmail");

// Displays the success page

form.addEventListener("submit", function (e) {
  e.preventDefault();

  inputBox.value.trim() === ""
    ? alert("Email field is empty")
    : (card_1.classList.add("hide"), card_2.classList.remove("hide"));
    userEmail.innerHTML = (inputBox.value)
});

// Returns to the form page
sucessButton.addEventListener("click", function (e) {
  e.preventDefault();
  card_1.classList.remove("hide");
  card_2.classList.add("hide");
});
