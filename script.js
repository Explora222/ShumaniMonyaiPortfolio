// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed navbar
            behavior: 'smooth'
        });

        // Close mobile menu if open
        navMenu.classList.remove('active');
    });
});

// Form submission handling (example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the data to a server
    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); // Reset the form
});

// Skills Bar Animation on Scroll
const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-level');

const animateSkills = () => {
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the skills section is in view
    if (skillsTop < windowHeight * 0.8) {
        skillBars.forEach(bar => {
            // Get the target width from the text content (e.g., "85%")
            const targetWidth = bar.textContent;
            // Remove the % and set the width dynamically
            bar.style.width = targetWidth;
        });
    }
};

// Trigger the animation when the page loads and when scrolling
window.addEventListener('load', animateSkills);
window.addEventListener('scroll', animateSkills);

// Optional: Function to open project modal (if you still want an in-page modal for projects)
function openProjectModal(url) {
    // Example: Create a modal dynamically or use a library like Fancybox
    // For now, just open in a new tab like the certificates
    window.open(url, '_blank', 'noopener');
}