const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit');
const spinner = document.querySelector('.loader');

const emailInput = document.getElementById("login");
const emailMessage = document.getElementById("login-massage");
const emailPattern = /^[\w+\.\w+\@\w+\.\w]{5,}$/;

const phoneInput = document.getElementById("phone");
const phoneMessage = document.getElementById("phone-massage");
const phonePattern = /^[+\d(-)()]{10,13}$/; 

const nameInput = document.getElementById("name");
const nameMessage = document.getElementById("name-massage");
const namePattern = /[A-Z][a-z]+(\s[A-Z][a-z]+){2}/; 

emailInput.addEventListener('input', (event) => {
  const email = event.target.value;
  const isEmailValid = emailPattern.test(email);

  if (isEmailValid) {
    emailMessage.textContent = "Valid"
  } else {
    emailMessage.textContent = "Invalid"
  }
})

phoneInput.addEventListener('input', (event) => {
  const phone = event.target.value;
  const isPhoneValid = phonePattern.test(phone);

  if (isPhoneValid) {
    phoneMessage.textContent = "Valid"
  } else {
    phoneMessage.textContent = "Invalid"
  }
})

nameInput.addEventListener('input', (event) => {
  const name = event.target.value;
  const isNameValid = namePattern.test(name);

  if (isNameValid) {
    nameMessage.textContent = "Valid"
  } else {
    nameMessage.textContent = "Invalid"
  }
})

submitButton.addEventListener('click', (event) =>{
    event.preventDefault();
    validateForm();
}) 


function validateForm() {
  let login = document.getElementById("login").value;
  let userpass = document.getElementById("userpass").value;
      
    if (login.length === 0 || userpass.length === 0) {
        console.log( "invalid value" )
    } if (login.length > 0 && userpass.length > 0){
          console.log( `'name:' ${login} 'password:' ${userpass}`)
        form.classList.add('hide')  
        showSpinner();
    }
}
   

function showSpinner() {
  spinner.classList.add('show');   
  setTimeout(() => {
    spinner.classList.remove('show');  
    }, 2000);
    location.href = 'profile_page.html';
};