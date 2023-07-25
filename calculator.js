// Global variables to keep track of the calculation
let currentInput = '';
let result = 0;
let operator = '';

// Function to display the current input
function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

// Function to append characters to the current input
function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

// Function to clear the display and reset the calculator
function clearDisplay() {
  currentInput = '';
  result = 0;
  operator = '';
  updateDisplay();
}

// Function to perform the calculation
function calculate() {
  if (currentInput !== '') {
    switch (operator) {
      case '+':
        result += parseFloat(currentInput);
        break;
      case '-':
        result -= parseFloat(currentInput);
        break;
      case '*':
        result *= parseFloat(currentInput);
        break;
      case '/':
        result /= parseFloat(currentInput);
        break;
      default:
        result = parseFloat(currentInput);
    }

    currentInput = result.toString();
    updateDisplay();
    operator = '';
  }
}

// Function to handle operator buttons
function handleOperator(op) {
  if (currentInput !== '') {
    calculate();
    operator = op;
    currentInput = '';
  }
}
