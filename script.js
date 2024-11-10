const darkLightModeBtn = document.getElementById("dark-light-mode-btn");
const body = document.querySelector("body");
let lightmode = localStorage.getItem('lightmode');

darkLightModeBtn.addEventListener("click", () => {
  lightmode = localStorage.getItem('lightmode');
  lightmode !== "active" ? enableLightMode() : enableDarkMode();
});

function enableLightMode() {
  localStorage.setItem("lightmode", "active");
  body.classList.add("lightmode");
}

function enableDarkMode() {
  localStorage.setItem("lightmode", null);
  body.classList.remove("lightmode");
}