export function updateYear() {
  const year = document.getElementById("year");
  if (year) {
    let currentYear = new Date().getFullYear();
    year.textContent = currentYear;
  }
} 