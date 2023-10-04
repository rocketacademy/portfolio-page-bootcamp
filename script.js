function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  menuLinks.classList.toggle("show-menu");
}

const menuIcon = document.querySelector(".menu-icon");

// Show/hide menu on click
menuIcon.addEventListener("click", toggleMenu);

// Hide menu when a link is clicked (optional)
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("show-menu");
  });
});

// Show menu icon on smaller screens
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    menuIcon.style.display = "block";
  } else {
    menuIcon.style.display = "none";
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("show-menu");
  }
});
