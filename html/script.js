const darkLightModeBtn = document.getElementById("dark-light-mode-btn");
const hamburgerBtn = document.getElementById("hamburger-btn");
const hiddenMenu = document.getElementById("hidden-menu");
const closeHiddenMenuBtn = document.getElementById("close-hidden-menu-btn");
const menuBtn = document.getElementById("menu-btn");
let lightmode = localStorage.getItem('lightmode');

checkLightMode();

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