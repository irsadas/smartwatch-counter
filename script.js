let count = 0;

const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');

incrementButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count.toString().padStart(4, '0'); // Pad with zeros
});

resetButton.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count.toString().padStart(4, '0'); // Pad with zeros
});