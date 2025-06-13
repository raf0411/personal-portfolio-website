export function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  const scrollThreshold = 300;

  function toggleBackToTopButton() {
    if (!backToTopBtn) return;
    if (window.scrollY > scrollThreshold) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener("scroll", toggleBackToTopButton);
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", scrollToTop);
  }
  toggleBackToTopButton();
} 