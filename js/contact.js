export function validateContactForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const msgInput = document.getElementById("message");
  const nameErrorLbl = document.getElementById("name-error-lbl");
  const emailErrorLbl = document.getElementById("email-error-lbl");
  const msgErrorLbl = document.getElementById("msg-error-lbl");

  if (nameInput.value === "" && emailInput.value === "" && msgInput.value === "") {
    nameErrorLbl.value = "Name can't be empty!"
    emailErrorLbl.value = "Email can't be empty!"
    msgErrorLbl.value = "Message can't be empty!"
    nameErrorLbl.innerText = nameErrorLbl.value
    emailErrorLbl.innerText = emailErrorLbl.value
    msgErrorLbl.innerText = msgErrorLbl.value
    nameErrorLbl.classList.remove("error-hidden")
    emailErrorLbl.classList.remove("error-hidden")
    msgErrorLbl.classList.remove("error-hidden")
  } else {
    nameErrorLbl.classList.add("error-hidden")
    emailErrorLbl.classList.add("error-hidden")
    msgErrorLbl.classList.add("error-hidden")
  }
}

export function refreshContactForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const msgInput = document.getElementById("message");
  if (nameInput || emailInput || msgInput) {
    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (msgInput) msgInput.value = "";
  }
}

export function setupContactForm() {
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", validateContactForm);
  }
} 