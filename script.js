const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirmEmail');
const submitButton = document.getElementById('formSubmit');

form.addEventListener('submit', (event) => {
    console.log(event);
  if (emailInput.value !== confirmEmailInput.value) {
    emailInput.style.backgroundColor = "#f79696";
    confirmEmailInput.style.backgroundColor = "#f79696";
    event.preventDefault();
    
  }
});