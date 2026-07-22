// Nav panel toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navBackdrop = document.getElementById("navBackdrop");

function closeNav() {
  navLinks.classList.remove("open");
  navBackdrop.classList.remove("open");
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navBackdrop.classList.toggle("open");
});

navBackdrop.addEventListener("click", closeNav);

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
