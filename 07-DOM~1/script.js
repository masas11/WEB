// =========================================================
// To-Do lista — čista DOM manipulacija (bez frameworka).
// Koncepti: state u JS nizu, render funkcija koja "iscrtava"
// state u DOM, event delegation, localStorage perzistencija.
// =========================================================

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const emptyMsg = document.getElementById("empty-msg");
const itemsLeftEl = document.getElementById("items-left");
const filterBtns = document.querySelectorAll(".filter-btn");

// --- State ---
// Jedan izvor istine. Nikad ne diramo DOM direktno bez
// da prvo izmenimo ovaj niz, pa onda pozovemo render().
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
let currentFilter = "all";

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  const filtered = todos.filter((t) => {
    if (currentFilter === "active") return !t.completed;
    if (currentFilter === "completed") return t.completed;
    return true;
  });

  list.innerHTML = ""; // najjednostavniji (ali ne i najbrži) način re-rendera

  filtered.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.completed ? " completed" : "");
    li.dataset.id = todo.id;

    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? "checked" : ""} />
      <span>${escapeHtml(todo.text)}</span>
      <button class="delete-btn" title="Obriši">✕</button>
    `;
    list.appendChild(li);
  });

  emptyMsg.hidden = filtered.length !== 0;
  itemsLeftEl.textContent = todos.filter((t) => !t.completed).length;
}

// Sprečava da korisnikov unos slučajno ubaci HTML tagove u stranicu
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// --- Dodavanje ---
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  todos.push({ id: Date.now(), text, completed: false });
  input.value = "";
  save();
  render();
});

// --- Event delegation: jedan listener na roditelju umesto
// po jednog na svakom čekboksu/dugmetu (koji stalno nastaju/nestaju) ---
list.addEventListener("click", (e) => {
  const li = e.target.closest(".todo-item");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (e.target.matches('input[type="checkbox"]')) {
    todos = todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    save();
    render();
  }

  if (e.target.matches(".delete-btn")) {
    todos = todos.filter((t) => t.id !== id);
    save();
    render();
  }
});

// --- Filteri ---
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

render();
