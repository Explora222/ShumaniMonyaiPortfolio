// Theme Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load Theme on Start
window.addEventListener("DOMContentLoaded", () => {
  const dark = localStorage.getItem("darkMode") === "true";
  if (dark) document.body.classList.add("dark-mode");

  // Highlight Active Nav Link
  const path = location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});

// Modal Logic
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Contact Form Validation
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
    } else {
      alert("Thank you for your message, " + name + "!");
      form.reset();
    }
  });
}