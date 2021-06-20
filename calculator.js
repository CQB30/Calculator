const display = document.querySelector("#display");
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector('#clear');

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2)
};

function subtract(num1, num2) {
	return parseFloat(num1) - parseFloat(num2)
};

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2)
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2)
}

function operate(operator, num1, num2) {
  if (operator == "+") {
      return Math.round(add(num1, num2)* 100) / 100
  } else if (operator == "-") {
      return Math.round(subtract(num1, num2) * 100) / 100
  } else if (operator == "*") {
      return Math.round(multiply(num1, num2) * 100) / 100
  } else {
      return Math.round(divide(num1, num2) * 100) / 100
  }
}

let operator = "";
let number1 = "";
let number2 = "";

function readDisplay() {
  return display.textContent
}

function resetDisplay() {
  display.textContent = "";
}

function appendNumber(number) {
  display.textContent += number;
}

clearButton.addEventListener("click", () => {
  resetDisplay();
  operator = "";
  number1 = "";
  number2 = "";
})

digits.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  })
})

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator == "") {
    operator = button.textContent; 
    number1 = readDisplay();
    resetDisplay();
    } else {
      number2 = readDisplay();
      number1 = operate(operator, number1, number2);
      operator = button.textContent;
      resetDisplay();
    }
  })
})

equalsButton.addEventListener("click", () => {
  if (number2 == 0 && operator == "/") {
    alert("ERROR can't divide by 0")
    number1 = "";
    number2 = "";
    operator = "";
  } else {
    number2 = readDisplay();
    if (number1 == "") {
      number1 = display.textContent;
    } else {
    display.textContent = operate(operator, number1, number2);
    operator = "";
    number1 = readDisplay();
    }
  }
})