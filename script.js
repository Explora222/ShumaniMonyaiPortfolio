// script.js

// Highlight active nav item
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});