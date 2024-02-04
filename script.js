const displayValue = document.querySelector('#display');
let firstNumber;
let operator;
let secondNumber;

// store all nums clicked to concat them instead overwrite
let numsClick = [];
const numSelect = document.querySelectorAll('.number-grid');

numSelect.forEach(numClick => {
    numClick.addEventListener('click', () => {
        // each num id store their own value, and its added to numsclick
        numsClick.push(numClick.id)
        displayValue.value = numsClick.join('');

    });
})


function sum(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    sum();
}