const display = document.querySelector("#display");
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector('#clear');

function add(num1, num2) {
  return num1 + num2
};

function subtract(num1, num2) {
	return num1 - num2
};

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2)
      break;
    case "-":
      return subtract(num1, num2)
      break;
    case "*":
      return multiply(num1, num2)
      break;
    case "/":
      return divide(num1, num2)
      break;
  }
}

function appendNumber(number) {
  display.textContent += number;
}

digits.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
    console.log("test");
  })
});