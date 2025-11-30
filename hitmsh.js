const toggle = document.querySelector(".theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("light") ? "☀️" : "🌙";
});
