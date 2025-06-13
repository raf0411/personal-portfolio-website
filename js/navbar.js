export function setupNavbar() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hiddenMenu = document.getElementById("hidden-menu");
  const closeHiddenMenuBtn = document.getElementById("close-hidden-menu-btn");
  const menuBtn = document.getElementById("menu-btn");

  function displayHiddenMenu() {
    hiddenMenu.classList.toggle("active");
  }

  function removeHiddenMenu() {
    hiddenMenu.classList.remove("active");
  }

  if (closeHiddenMenuBtn) {
    closeHiddenMenuBtn.addEventListener("click", removeHiddenMenu);
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", removeHiddenMenu);
  }
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", displayHiddenMenu);
  }
} 