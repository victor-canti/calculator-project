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

        if (display.textContent == 'Error') {
            display.textContent = 0;
            displayValue = [];
            firstNumber = undefined;
            secondNumber = 0;
            currentValue = null;
        }
        
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

const clearAllBtn = document.querySelector('#clear-all')

clearAllBtn.addEventListener('click', () => {
    display.textContent = 0;
    displayValue = [];
    firstNumber = undefined;
    secondNumber = 0;
    currentValue = null;
})

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
                secondNumber = 0;
                displayValue = [];
            } else if (secondNumber > 0) {
                operate(Number(firstNumStored), Number(secondNumber), operator);
                operator = operatorPick.id;
                secondNumber = 0;
                displayValue = [];
                } else if (operator !== undefined) {
                display.textContent = currentValue;
                displayValue = [];
                operatorName === 'sum' ? operator = 'sum' :
                operatorName === 'subtract' ? operator = 'subtract' :
                operatorName === 'multiply' ? operator = 'multiply' :
                operator = 'divide';
                }

        } else if (firstNumber !== undefined) {
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