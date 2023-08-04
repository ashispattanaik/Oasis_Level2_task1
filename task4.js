let displayValue = '0';
let operator = '';
let firstOperand = null;

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function updateOperation(operation) {
    const operationDisplay = document.getElementById('operation');
    operationDisplay.textContent = operation;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
    updateOperation('');
}

function deleteLastCharacter() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
    updateDisplay();
    updateOperation(op);
}

function calculateResult() {
    const secondOperand = parseFloat(displayValue);
    switch (operator) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayValue = (firstOperand / secondOperand).toString();
            break;
        default:
            break;
    }
    operator = '';
    firstOperand = null;
    updateDisplay();
    updateOperation('');
}
