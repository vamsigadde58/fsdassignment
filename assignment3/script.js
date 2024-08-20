const box = document.getElementById('box');
const description = document.getElementById('description');
const actionButton = document.getElementById('actionButton');

let isActive = false;

actionButton.addEventListener('click', () => {
    if (isActive) {
        // Reset to initial state
        box.style.backgroundColor = '#e0e0e0';
        description.textContent = 'This is the initial text.';
        actionButton.textContent = 'Press Me';
        actionButton.style.backgroundColor = '#007bff';
    } else {
        // Change to active state
        box.style.backgroundColor = '#4caf50'; // New box color
        description.textContent = 'The text has changed!';
        actionButton.textContent = 'Reset';
        actionButton.style.backgroundColor = '#d32f2f'; // New button color
    }
    isActive = !isActive; // Toggle the state
});
