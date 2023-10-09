// function toggleMenu() {
//   const menuLinks = document.querySelector(".menu-links");
//   menuLinks.classList.toggle("show-menu");
// }

// const menuIcon = document.querySelector(".menu-icon");

// // Show/hide menu on click
// menuIcon.addEventListener("click", toggleMenu);

// // Hide menu when a link is clicked (optional)
// const navLinks = document.querySelectorAll(".nav-links a");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     const navLinks = document.querySelector(".nav-links");
//     navLinks.classList.remove("show-menu");
//   });
// });

// // Show menu icon on smaller screens
// window.addEventListener("resize", () => {
//   if (window.innerWidth <= 768) {
//     menuIcon.style.display = "block";
//   } else {
//     menuIcon.style.display = "none";
//     const navLinks = document.querySelector(".nav-links");
//     navLinks.classList.remove("show-menu");
//   }
// });

// Light and Dark Mode
function toggleMode() {
  const body = document.body;
  const header = document.querySelector("header");
  const navigationLinks = document.querySelectorAll("a:not(.no-dark-mode)");

  if (body.classList.contains("dark-mode")) {
    // Switch to light mode
    body.classList.remove("dark-mode");
    body.style.backgroundColor = "var(--background-light)";
    body.style.color = "var(--text-light)";
  } else {
    // Switch to dark mode
    body.classList.add("dark-mode");
    body.style.backgroundColor = "var(--background-dark)";
    body.style.color = "var(--text-dark)";
  }
  if (header.classList.contains("dark-mode")) {
    // Switch to light mode
    header.classList.remove("dark-mode");
    header.style.backgroundColor = "var(--background-light)";
    header.style.color = "var(--text-light)";
  } else {
    // Switch to dark mode
    header.classList.add("dark-mode");
    header.style.backgroundColor = "var(--background-dark)";
    header.style.color = "var(--text-dark)";
  }

  // Loop through each navigation link (excluding those with no-dark-mode class) and toggle the class
  navigationLinks.forEach((link) => {
    if (link.classList.contains("dark-mode")) {
      link.classList.remove("dark-mode");
      link.style.color = "var(--text-light)";
    } else {
      link.classList.add("dark-mode");
      link.style.color = "var(--text-nav-dark)";
    }
  });
}
