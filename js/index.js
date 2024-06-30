const subscriptionForm = document.querySelector('.subscription-form')
const errorIcon = document.querySelector('.icon-hint')
const errorHint = document.querySelector('.hint')
const emailInput = document.getElementById('email')

subscriptionForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let email = emailInput.value.toLowerCase()
  
  if (!validate(email)) {
    showError()
  } else {
    showWelcome()
  }
})

function validate(input) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(input)
}

function showError() {
  errorIcon.style.display = 'block'
  errorHint.style.display = 'block'
  setTimeout(() => {
    emailInput.value = ''
    errorIcon.style.display = 'none'
    errorHint.style.display = 'none'
    document.querySelector('.submit-btn').blur()
  }, 3000);
}

function showWelcome() {
  emailInput.value = ''
  document.querySelector('.submit-btn').blur()
}