const display = document.querySelector('#display');
let firstNumber;
let operator;
let secondNumber;

// store all nums clicked to concat them instead overwrite
let displayValue = [];
const numsBtn = document.querySelectorAll('.number-grid');
const clearAllBtn = document.querySelector('#clear-all')

numsBtn.forEach(numClick => {
    displayValue.addEventListener('click', () => {
        // each num id store their own value, and its added to displayValue
        displayValue.push(numClick.id)
        display.value = displayValue.join('');
    });
})

clearAllBtn.addEventListener('click', () => {
    display.value = 0;
    displayValue = [];
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