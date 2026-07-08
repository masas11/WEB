// =========================================================
// Dark/light mode toggle preko data-theme atributa na <html>.
// Sav vizuelni rad rade CSS varijable — JS samo menja atribut
// i pamti izbor u localStorage.
// =========================================================

const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggleBtn.textContent = theme === "dark" ? "☀️ Svetla tema" : "🌙 Tamna tema";
  localStorage.setItem("theme", theme);
}

// Pri učitavanju stranice, koristi sačuvanu temu (ili svetlu po default-u)
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
