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

document.addEventListener('DOMContentLoaded', function() {
    // Simulating a user with access. In a real scenario, you'd check the user's subscription status from your backend.
    const hasAccess = checkUserAccess();

    if (hasAccess) {
        document.getElementById('paywall-content').classList.remove('hidden');
        document.getElementById('paywall-message').classList.add('hidden');
    } else {
        document.getElementById('paywall-content').classList.add('hidden');
        document.getElementById('paywall-message').classList.remove('hidden');
    }
});

// Function to simulate checking user's access
function checkUserAccess() {
    // Replace with real access logic (e.g., API call to check subscription)
    return false; // Set to true to simulate access, false to deny
}

// Example of how the paywall might work in JavaScript

document.addEventListener("DOMContentLoaded", function() {
    // Assuming the server sets a cookie or token indicating subscription status
    const isSubscribed = checkUserSubscription(); // This would be a server call

    if (isSubscribed) {
        document.getElementById("paywall-content").classList.remove("hidden");
    } else {
        // Redirect to a payment page or show a subscription message
        alert("This content is only available to paying members.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Assuming the server sets a cookie or token indicating subscription status
    checkUserSubscription();
});

function checkUserSubscription() {
    fetch('/api/check-subscription', {
        method: 'GET',
        credentials: 'include' // Include credentials for authentication (if using cookies)
    })
    .then(response => response.json())
    .then(data => {
        if (data.isSubscribed) {
            document.getElementById("paywall-content").classList.remove("hidden");
            document.getElementById("paywall-message").classList.add("hidden");
        } else {
            document.getElementById("paywall-content").classList.add("hidden");
            document.getElementById("paywall-message").classList.remove("hidden");
        }
    })
    .catch(error => {
        console.error('Error checking subscription:', error);
    });
}
