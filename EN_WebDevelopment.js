// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector('.navbar').classList.toggle("dark-mode");
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
