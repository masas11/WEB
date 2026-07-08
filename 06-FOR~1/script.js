// =========================================================
// Prilagođena validacija forme.
// Koristimo Constraint Validation API (checkValidity,
// validity.valueMissing, itd.) umesto ručnog pisanja regexa
// za svaki slučaj — HTML5 već zna da proveri email format,
// required, minlength...
// =========================================================

const form = document.getElementById("signup-form");
const successMsg = document.getElementById("success-msg");

// Poruke prilagođene svakom tipu greške
function messageFor(input) {
  const v = input.validity;
  if (v.valueMissing) return "Ovo polje je obavezno.";
  if (v.typeMismatch) return "Format nije ispravan (proveri email).";
  if (v.tooShort) return `Potrebno je bar ${input.minLength} karaktera.`;
  return "Vrednost nije validna.";
}

function validateField(input) {
  const field = input.closest(".field");
  const errorSpan = field.querySelector(".error-msg");

  if (!input.checkValidity()) {
    field.classList.add("has-error");
    errorSpan.textContent = messageFor(input);
    return false;
  } else {
    field.classList.remove("has-error");
    errorSpan.textContent = "";
    return true;
  }
}

// Validiraj svako polje čim korisnik izađe iz njega (blur)
form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", () => validateField(input));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.hidden = true;

  const inputs = [...form.querySelectorAll("input")];
  const allValid = inputs.map(validateField).every(Boolean);

  if (allValid) {
    successMsg.hidden = false;
    form.reset();
    inputs.forEach((i) => i.closest(".field").classList.remove("has-error"));
  }
});
