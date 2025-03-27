const darkLightModeBtn = document.getElementById("dark-light-mode-btn");
const hamburgerBtn = document.getElementById("hamburger-btn");
const hiddenMenu = document.getElementById("hidden-menu");
const closeHiddenMenuBtn = document.getElementById("close-hidden-menu-btn");
const menuBtn = document.getElementById("menu-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");

const nameErrorLbl = document.getElementById("name-error-lbl");
const emailErrorLbl = document.getElementById("email-error-lbl");
const msgErrorLbl = document.getElementById("msg-error-lbl");

let lightmode = localStorage.getItem('lightmode');

updateYear();
refreshContactForm();
checkLightMode();

function updateYear() {
  const year = document.getElementById("year");
  let currentYear = new Date().getFullYear();
  year.textContent = currentYear;
}

function enableLightMode() {
  localStorage.setItem("lightmode", "active");
  document.body.classList.add("lightmode");
}

function enableDarkMode() {
  localStorage.setItem("lightmode", null);
  document.body.classList.remove("lightmode");
}

function checkLightMode() {
  if (lightmode === "active") {
    enableLightMode();
  } else {
    enableDarkMode();
  }
}

function displayHiddenMenu() {
  hiddenMenu.classList.toggle("active");
}

function removeHiddenMenu() {
  hiddenMenu.classList.remove("active");
}

function validateContactForm() {
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

function refreshContactForm() {
  if (nameInput || emailInput || msgInput) {
    nameInput.value = ""
    emailInput.value = ""
    msgInput.value = ""
  }
}

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    validateContactForm()
  })
}

closeHiddenMenuBtn.addEventListener("click", () => {
  removeHiddenMenu();
});

menuBtn.addEventListener("click", () => {
  removeHiddenMenu();
});

hamburgerBtn.addEventListener("click", () => {
  displayHiddenMenu();
});

darkLightModeBtn.addEventListener("click", () => {
  lightmode = localStorage.getItem('lightmode');
  lightmode !== "active" ? enableLightMode() : enableDarkMode();
});