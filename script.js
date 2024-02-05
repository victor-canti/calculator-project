const display = document.querySelector('#display');
let firstNumber = 0;
let firstNumStored;
let operator;
let secondNumber;
// continue number operation until click clear all button
let currentValue = null;

// store all nums clicked to concat them instead overwrite
let displayValue = [];
const numsBtn = document.querySelectorAll('.number-grid');
const clearAllBtn = document.querySelector('#clear-all')

numsBtn.forEach(numClick => {
    numClick.addEventListener('click', () => {
        
        if (firstNumber !== null) {
            // each num id store their own value, and its added to displayValue
            displayValue.push(numClick.id)
            display.value = displayValue.join('');
            firstNumber = displayValue.join('');
        } 
        // allow to do more than 1 operation with the same number and takes secondNumber as 
        // second parameter of operate() function
        else if (currentValue !== null) {
            displayValue.push(numClick.id)
            display.value = displayValue.join('');
            secondNumber = displayValue.join('');
        } else {
            displayValue.push(numClick.id)
            display.value = displayValue.join('');
            secondNumber = displayValue.join('');
        }
        
    });
})

clearAllBtn.addEventListener('click', () => {
    display.value = 0;
    displayValue = [];
    firstNumber = 0;
    secondNumber = 0;
    currentValue = null;
})

basicsOperatorsBtn = document.querySelectorAll('.operator-grid')
basicsOperatorsBtn.forEach(operatorPick => {
    let operatorName = operatorPick.id;

    operatorPick.addEventListener('click', () => {

        if (currentValue !== null) {
            if (secondNumber > 0) {
                operate(Number(currentValue), Number(secondNumber), operator);
                operator = operatorPick.id;
                secondNumber = 0;
                displayValue = [];
            } else {
            display.value = currentValue;
            displayValue = [];
            operatorName === 'sum' ? operator = 'sum' :
            operatorName === 'subtract' ? operator = 'subtract' :
            operatorName === 'multiply' ? operator = 'multiply' :
            operator = 'divide';
            }
        } else {
        firstNumStored = firstNumber;
        display.value = firstNumber;
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
    display.value = num1 + num2;
    currentValue = num1 + num2;
    secondNumber = 0;
}

function subtract(num1, num2) {
    display.value = num1 - num2
    currentValue = num1 - num2;
    secondNumber = 0;
}

function multiply(num1, num2) {
    display.value = num1 * num2
    currentValue = num1 * num2;
    secondNumber = 0;
}

function divide(num1, num2) {
    display.value = num1 / num2
    currentValue = num1 / num2;
    secondNumber = 0;
}