import { updateYear } from './dom-utils.js';
import { enableLightMode, enableDarkMode, checkLightMode } from './theme.js';
import { setupNavbar } from './navbar.js';
import { refreshContactForm, setupContactForm } from './contact.js';
import { setupBackToTop } from './scroll.js';
import { setupLoadingBar } from './loading-bar.js';

document.addEventListener('DOMContentLoaded', () => {
  updateYear();
  refreshContactForm();
  checkLightMode();
  setupNavbar();
  setupContactForm();
  setupBackToTop();
  setupLoadingBar();

  // Dark/Light mode button
  const darkLightModeBtn = document.getElementById("dark-light-mode-btn");
  if (darkLightModeBtn) {
    darkLightModeBtn.addEventListener("click", () => {
      let lightmode = localStorage.getItem('lightmode');
      lightmode !== "active" ? enableLightMode() : enableDarkMode();
    });
  }
}); 