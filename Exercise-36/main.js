
const colorPicker = document.querySelector('#colorPicker')

const colorPreview = document.querySelector('#colorPreview');

const colorHistory = document.querySelector('#colorHistory');

const clearHistoryButton = document.querySelector('#clearHistoryButton');

colorPicker.addEventListener('input', (event) => {
    colorPreview.style.backgroundColor = colorPicker.value;
});


colorPicker.addEventListener('change', (event) => {
    const selectedColor = colorPicker.value;
    const listItem = document.createElement('li');
    listItem.style.color = selectedColor;
    listItem.textContent = selectedColor;
    colorHistory.appendChild(listItem);
});

clearHistoryButton.addEventListener('click', (event) => {
    colorHistory.innerHTML = '';
});