const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuLinks = document.querySelectorAll(".nav-menu a");

function toggleMenu() {
  navMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
}

function closeMenu() {
  navMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
}

menuToggle.addEventListener("click", (event) => {
  toggleMenu();
  event.stopPropagation();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

menuOverlay.addEventListener("click", () => {
  closeMenu();
});
