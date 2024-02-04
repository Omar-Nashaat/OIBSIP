let choice = document.getElementById('choice');
let degreeInput = document.getElementById('degreeInput');
let convertBtn = document.getElementById('convertBtn');
let resultField = document.getElementById('resultField');
let clearForm = document.getElementById('clearForm');

convertBtn.addEventListener('click', function () {
    if (choice.value === 'Fahrenheit') {
        convertToCels();
    }
    else if (choice.value === 'Celsius') {
        convertToFahr();
    }
})

clearForm.addEventListener('click', clearFields)

function convertToCels() {
    let finalRes = (degreeInput.value - 32) * 5 / 9;
    resultField.value = finalRes;
}

function convertToFahr() {
    let finalRes = (degreeInput.value * 9 / 5) + 32;
    resultField.value = finalRes;
}

function clearFields() {
    degreeInput.value = '';
    resultField.value = '';
}





