export function enableLightMode() {
  localStorage.setItem("lightmode", "active");
  document.body.classList.add("lightmode");
}

export function enableDarkMode() {
  localStorage.setItem("lightmode", null);
  document.body.classList.remove("lightmode");
}

export function checkLightMode() {
  let lightmode = localStorage.getItem('lightmode');
  if (lightmode === "active") {
    enableLightMode();
  } else {
    enableDarkMode();
  }
} 