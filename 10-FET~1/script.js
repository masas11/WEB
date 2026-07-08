// =========================================================
// Fetch API + async/await
// Tri stanja koja SVAKI mrežni poziv treba da pokrije u UI-ju:
// loading -> success ILI error. Nikad ne pretpostavljaj da
// će fetch uvek uspeti.
// =========================================================

const loadBtn = document.getElementById("load-btn");
const loadBrokenBtn = document.getElementById("load-broken-btn");
const statusEl = document.getElementById("status");
const listEl = document.getElementById("user-list");

function setStatus(text, type) {
  statusEl.textContent = text;
  statusEl.className = "status" + (type ? " " + type : "");
}

async function loadUsers(url) {
  listEl.innerHTML = "";
  setStatus("Učitavanje...", "loading");
  loadBtn.disabled = true;
  loadBrokenBtn.disabled = true;

  try {
    const response = await fetch(url);

    // fetch() baca grešku SAMO za mrežne probleme (npr. nema interneta),
    // ne i za HTTP greške poput 404/500 — te moramo ručno proveriti.
    if (!response.ok) {
      throw new Error(`Server je vratio grešku: ${response.status}`);
    }

    const users = await response.json();
    renderUsers(users);
    setStatus(`Učitano ${users.length} korisnika ✅`, "success");
  } catch (err) {
    setStatus(`Greška: ${err.message}`, "error");
  } finally {
    loadBtn.disabled = false;
    loadBrokenBtn.disabled = false;
  }
}

function renderUsers(users) {
  listEl.innerHTML = users
    .slice(0, 5)
    .map(
      (u) => `
      <li>
        <strong>${u.name}</strong>
        <span>${u.email} · ${u.company?.name ?? ""}</span>
      </li>
    `
    )
    .join("");
}

loadBtn.addEventListener("click", () => {
  loadUsers("https://jsonplaceholder.typicode.com/users");
});

// Namerno pogrešan URL da demonstriramo error handling
loadBrokenBtn.addEventListener("click", () => {
  loadUsers("https://jsonplaceholder.typicode.com/ova-ruta-ne-postoji");
});
