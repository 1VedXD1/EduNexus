// JavaScript for the Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');
const cta = document.querySelector('.cta');
const profileSection = document.querySelector('.profile-section');
const profileIcon = document.querySelector('.profile-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navLinks.classList.toggle('active');
    searchBar.classList.toggle('active');
    cta.classList.toggle('active');
});

profileIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");
}

// Function to run HTML code in the playground
function runCode(elementId) {
    const code = document.getElementById(`code-editor-${elementId}`).value;
    const output = document.getElementById(`output-${elementId}`);
    
    try {
        output.innerHTML = code; // Render the HTML code in the output div
    } catch (e) {
        output.textContent = `Error: ${e.message}`;
    }
}
