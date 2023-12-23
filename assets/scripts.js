const subscribeButton = document.querySelector(".button");
const subscribePage = document.querySelector(".wholeBody");
const successPage = document.querySelector(".successState");

console.log(subscribeButton, subscribePage, successPage)

subscribeButton.addEventListener("click", function() {
    // This function will be executed when the button is clicked
    subscribePage.style.display = subscribePage.style.display === 'none' ? 'block' : 'none';
    successPage.style.display = successPage.style.display === 'none' ? 'block' : 'block';
});