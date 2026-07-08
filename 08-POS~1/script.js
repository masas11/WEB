// Dropdown toggle
const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.hidden = !dropdownMenu.hidden;
});
// Klik bilo gde van menija ga zatvara
document.addEventListener("click", () => (dropdownMenu.hidden = true));

// Modal open/close
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const overlay = document.getElementById("modal-overlay");

openModalBtn.addEventListener("click", () => (overlay.hidden = false));
closeModalBtn.addEventListener("click", () => (overlay.hidden = true));
// Klik na tamnu pozadinu (ne na sam modal) takođe zatvara
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.hidden = true;
});
// Escape zatvara modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") overlay.hidden = true;
});
