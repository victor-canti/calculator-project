const display = document.querySelector('#display');
let firstNumber;
let firstNumStored;
let operator;
let secondNumber;
// continue number operation until click clear all button
let currentValue = null;

// store all nums clicked to concat them instead overwrite
let displayValue = [];
const numsBtn = document.querySelectorAll('.number-grid');

numsBtn.forEach(numClick => {
    numClick.addEventListener('click', () => {

        if (display.textContent == 'Error') {cleanDisplayType('clear all')}
        
        if (firstNumber !== null) {
            // each num id store their own value, and its added to displayValue
            displayValue.push(numClick.id)
            display.textContent = displayValue.join('');
            firstNumber = displayValue.join('');
        } 
        // allow to do more than 1 operation with the same number and takes secondNumber as 
        // second parameter of operate() function
        else if (currentValue !== null) {
            displayValue.push(numClick.id)
            display.textContent = displayValue.join('');
            secondNumber = displayValue.join('');
        } else {
            displayValue.push(numClick.id)
            display.textContent = displayValue.join('');
            secondNumber = displayValue.join('');
        }
        
    });
})

const clearAllBtn = document.querySelector('#clear-all');
const clearEntryBtn = document.querySelector('#clear-entry');
const backSpaceBtn = document.querySelector('#backspace');

clearAllBtn.addEventListener('click', () => {cleanDisplayType('clear all')});
clearEntryBtn.addEventListener('click', () => {cleanDisplayType('clear entry')});
backSpaceBtn.addEventListener('click', () => {cleanDisplayType('backspace')});

function cleanDisplayType(type) {
    if (type == 'clear all') {
        display.textContent = 0;
        displayValue = [];
        firstNumber = undefined;
        secondNumber = undefined;
        currentValue = null;
    } else if (type == 'clear entry') {
        if (firstNumber !== null) {
            displayValue = [];
            displayValue.length === 0 ? display.textContent = '0' :
            display.textContent = displayValue.join('');
            firstNumber = displayValue.join('');
        } else if (secondNumber === 0) {
            cleanDisplayType('clear all');
        } else {
            displayValue = [];
            displayValue.length === 0 ? display.textContent = '0' :
            display.textContent = displayValue.join('');
            displayValue.length === 0 ? secondNumber = '0' :
            secondNumber = displayValue.join('');
        }
    } else {
        if (firstNumber !== null) {
            displayValue.pop()
            displayValue.length === 0 ? display.textContent = '0' :
            display.textContent = displayValue.join('');
            firstNumber = displayValue.join('');
        } else if (secondNumber !== undefined) {
            displayValue.pop()
            displayValue.length === 0 ? display.textContent = '0' :
            display.textContent = displayValue.join('');
            displayValue.length === 0 ? secondNumber = '0' :
            secondNumber = displayValue.join('');
        }
    }
}


basicsOperatorsBtn = document.querySelectorAll('.operator-grid')
basicsOperatorsBtn.forEach(operatorPick => {
    let operatorName = operatorPick.id;

    operatorPick.addEventListener('click', () => {
    
        // if dividing a number by 0 display error message
        if (operator == 'divide' && secondNumber == 0) {
            divide(1, 0);
            operator = undefined;
        } else if (currentValue !== null || firstNumber === null) {

            if (secondNumber > 0 && currentValue !== null) {
                operate(Number(currentValue), Number(secondNumber), operator);
                operator = operatorPick.id;
                secondNumber = undefined;
                displayValue = [];
            } else if (secondNumber !== undefined && secondNumber !== '0') {
                operate(Number(firstNumStored), Number(secondNumber), operator);
                operator = operatorPick.id;
                secondNumber = '0';
                displayValue = [];
                } else if (operator !== undefined) {
                display.textContent = currentValue;
                displayValue = [];
                operatorName === 'sum' ? operator = 'sum' :
                operatorName === 'subtract' ? operator = 'subtract' :
                operatorName === 'multiply' ? operator = 'multiply' :
                operator = 'divide';
                }

        } else if (firstNumber !== undefined && firstNumber !== '') {
            firstNumStored = firstNumber;
            display.textContent = firstNumber;
            displayValue = [];
            firstNumber = null;
            operatorName === 'sum' ? operator = 'sum' :
            operatorName === 'subtract' ? operator = 'subtract' :
            operatorName === 'multiply' ? operator = 'multiply' :
            operator = 'divide';
        }   
    })
})



equalsBtn = document.querySelector('#equals')

equalsBtn.addEventListener('click', () => {
    if (currentValue !== null) {
        operate(Number(currentValue), Number(secondNumber), operator)
    } else if(secondNumber !== undefined) {
         operate(Number(firstNumStored), Number(secondNumber), operator);
    }
})

function operate(num1, num2, operator) {
    if (operator === 'sum') {
        sum(num1, num2)
    } else if (operator === 'subtract') {
        subtract(num1, num2)
    } else if (operator === 'multiply') {
        multiply(num1, num2)
    } else if (operator === 'divide') {
        divide(num1, num2)
    }
}

function sum(num1, num2) {
    display.textContent = num1 + num2;
    currentValue = num1 + num2;
    secondNumber = 0;
}

function subtract(num1, num2) {
    display.textContent = num1 - num2
    currentValue = num1 - num2;
    secondNumber = 0;
}

function multiply(num1, num2) {
    display.textContent = num1 * num2
    currentValue = num1 * num2;
    secondNumber = 0;
}

function divide(num1, num2) {
    if (num2 == 0) {
        display.textContent = 'Error';
    } else {
        display.textContent = num1 / num2
        currentValue = num1 / num2;
        secondNumber = 0;
    }
}