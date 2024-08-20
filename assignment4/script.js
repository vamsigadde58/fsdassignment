document.getElementById('generateButton').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('min-value').value);
    const maxValue = parseInt(document.getElementById('max-value').value);

    // Ensure that the inputs are valid
    if (isNaN(minValue) || isNaN(maxValue)) {
        alert('Please enter valid numbers for both fields.');
        return;
    }

    if (minValue > maxValue) {
        alert('Minimum value cannot be greater than maximum value.');
        return;
    }

    // Generate a random number between minValue and maxValue
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the result
    document.getElementById('result').textContent = `Generated Random Number: ${randomNumber}`;
});
