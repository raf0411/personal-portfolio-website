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

  const darkLightModeBtn = document.getElementById("dark-light-mode-btn");
  if (darkLightModeBtn) {
    darkLightModeBtn.addEventListener("click", () => {
      let lightmode = localStorage.getItem('lightmode');
      lightmode !== "active" ? enableLightMode() : enableDarkMode();
    });
  }

  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}); 