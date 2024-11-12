const darkLightModeBtn = document.getElementById("dark-light-mode-btn");
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

darkLightModeBtn.addEventListener("click", () => {
  lightmode = localStorage.getItem('lightmode');
  lightmode !== "active" ? enableLightMode() : enableDarkMode();
});