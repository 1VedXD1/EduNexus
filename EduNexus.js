// Optional buttons of Navbar
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

// This is Playground code
function runCode(elementId) {
    const code = document.getElementById(`code-editor-${elementId}`).value;
    const output = document.getElementById(`output-${elementId}`);
    
    try {
        output.innerHTML = code;
    } catch (e) {
        output.textContent = `Error: ${e.message}`;
    }
}