const display = document.querySelector('#display');
let firstNumber;
let firstNumberPress = true;
let operator;
let secondNumber;
let secondNumberPress = false;
let currentValue;

// store all nums clicked to concat them instead overwrite
let displayTotalValue = [];
const numsBtn = document.querySelectorAll('.number-grid');
    numsBtn.forEach(numPick => numPick.addEventListener('click', () => {
        num = numPick.id;

        if (firstNumberPress) {
            if (num === '.' && displayTotalValue.includes(num)) AbortController() 
            displayTotalValue.push(num);
            display.textContent =  displayTotalValue.join(''); 
            firstNumber = displayTotalValue.join('')
            operationGoing = false;

        } else if (secondNumberPress) {
            if (num === '.' && displayTotalValue.includes(num)) AbortController()
            displayTotalValue.push(num);
            display.textContent = displayTotalValue.join('');
            secondNumber = displayTotalValue.join('');
        }

    }))

let operationGoing;
const OperatorsBtn = document.querySelectorAll('.operator-grid');
OperatorsBtn.forEach(operationPick => operationPick.addEventListener('click', () => {
    operation = operationPick.id
    
    if (secondNumber !== undefined) {
        operate(Number(firstNumber), Number(secondNumber), operator)
        operator = operation;
        displayTotalValue = [];
        secondNumberPress = true;
        operationGoing = true;
    } else if (operationGoing === false) {
        firstNumberPress = false;
        secondNumberPress = true;
        displayTotalValue = [];
        operator = operation;
        operationGoing = true;
    }
}))

const equalsBtn = document.querySelector('.equal-grid');
equalsBtn.addEventListener('click', equality)

function equality() {
    if(secondNumberPress && secondNumber !== undefined && operationGoing) {
        operate(Number(firstNumber), Number(secondNumber), operator);
        secondNumberPress = false;
        operationGoing = false;
    }
}


const clearAllBtn = document.querySelector('#clear-all');
const clearEntryBtn = document.querySelector('#clear-entry');
const backSpaceBtn = document.querySelector('#backspace');

clearAllBtn.addEventListener('click', () => {cleanDisplayType('clear all')});
clearEntryBtn.addEventListener('click', () => {cleanDisplayType('clear entry')});
backSpaceBtn.addEventListener('click', () => {cleanDisplayType('backspace')});

function cleanDisplayType(type) {
    if (type == 'clear all') {
        display.textContent = '0';
        displayTotalValue = [];
        firstNumberPress = true;
        firstNumber = undefined;
        secondNumberPress = false;
        secondNumber = undefined;
        operator = undefined;
        operationGoing = undefined;
    } else if (type == 'clear entry') {
        if (firstNumberPress) {

            displayTotalValue = [];
            display.textContent = '0';
            firstNumber = '0';

        } else if (secondNumber === undefined) {
            cleanDisplayType('clear all');
        } else if (secondNumberPress && secondNumber !== undefined) {

            displayTotalValue = [];
            display.textContent = '0';
            secondNumber = '0';
        }
        
    } else {
        if (firstNumberPress) {

            displayTotalValue.pop();
            displayTotalValue.length === 0 ? display.textContent = '0' :
            display.textContent = displayTotalValue.join('');
            firstNumber = displayTotalValue.join('');

        } else if (secondNumber === undefined) {
            cleanDisplayType('clear all');
        } else if (secondNumberPress && secondNumber !== undefined) {

            displayTotalValue.pop();
            displayTotalValue.length === 0 ? display.textContent = '0' :
            display.textContent = displayTotalValue.join('');
            secondNumber = displayTotalValue.join('');
        }
    }
}


function operate(num1, num2, operator) {
    if (num1.toString().includes('.')) num1 = Number(num1.toFixed(1));
    if (num2.toString().includes('.')) num2 = Number(num2.toFixed(1));


    if (operator === 'sum') {
        sum(num1, num2)
    } else if (operator === 'subtract') {
        subtract(num1, num2)
    } else if (operator === 'multiply') {
        multiply(num1, num2)
    } else if (operator === 'divide') {
        divide(num1, num2)
    }
    operationGoing = false;
}

function sum(num1, num2) {
    result = (num1 * 100 + num2 * 100) / 100

    display.textContent = result.toString();
    firstNumber = result.toString();
    secondNumber = undefined;
    currentValue = result;
}

function subtract(num1, num2) {
    result = (num1 * 100 - num2 * 100) / 100

    display.textContent = result.toString()
    firstNumber = result.toString();
    secondNumber = undefined;
    currentValue = result;
}

function multiply(num1, num2) {
    result = ((num1 * 100) * (num2 * 100)) / 10000;

    display.textContent = result.toString();
    firstNumber = result.toString();
    secondNumber = undefined;
    currentValue = result;
}

function divide(num1, num2) {
    result = ((num1 * 100) / (num2 * 100))

    if (num2 == 0) {
        display.textContent = 'Error';
        displayTotalValue = [];
        firstNumberPress = true;
        firstNumber = undefined;
        secondNumberPress = false;
        secondNumber = undefined;
        operator = undefined;
        operationGoing = undefined;
    } else {
        display.textContent = result.toString();
        firstNumber = result.toString();
        secondNumber = undefined;
        currentValue = result;
    }
}

negativeNumBtn = document.querySelector('#negative-num');
negativeNumBtn.addEventListener('click', negativeNum);

function negativeNum() {
    if (firstNumberPress) {
        
        if(display.textContent.includes('-')) {
            display.textContent =  `${Number(displayTotalValue.join('')) * 1}`; 
            firstNumber = `${Number(displayTotalValue.join('')) * 1}`;
        } else {
            display.textContent =  `${Number(displayTotalValue.join('')) * -1}`; 
            firstNumber = `${Number(displayTotalValue.join('')) * -1}`;
        }

    } else if (secondNumberPress && secondNumber !== undefined) {

        if(display.textContent.includes('-')) {
            display.textContent =  `${Number(displayTotalValue.join('')) * 1}`; 
            secondNumber = `${Number(displayTotalValue.join('')) * 1}`;
        } else {
            display.textContent =  `${Number(displayTotalValue.join('')) * -1}`; 
            secondNumber = `${Number(displayTotalValue.join('')) * -1}`;
        }
    }
}

percentageBtn = document.querySelector('#percentage');
percentageBtn.addEventListener('click', percentage);

function percentage() {
    if (firstNumberPress) {
        displayTotalValue = [];
        display.textContent = '0'; 
        firstNumber = '0';

    } else if (secondNumberPress && secondNumber !== undefined) {
        let result = Number(secondNumber) * Number(firstNumber) / 100;
        if (result.toString().includes('.')) result = Number(result.toFixed(2));
        display.textContent = `${result}`;
        secondNumber = `${result}`;
    }
}