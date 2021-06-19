const add = function(num1, num2) {
  if (isNaN(num1) == false && isNaN(num2) == false) {
    return num1 + num2
  } else {
    return 0
  }
};

const subtract = function(num1, num2) {
	if (isNaN(num1) == false && isNaN(num2) == false) {
    return num1 - num2
  } else {
    return 0
  }
};

const sum = function(numArray) {
	var initialValue = 0;
  if (numArray.length > 0) {
    return numArray.reduce((total, currentValue) => total + currentValue, initialValue)
  } else {
    return 0
  }
};

const multiply = function(numArray) {
  var initialValue = 1;
  if (numArray.length > 1) {
    return numArray.reduce((total, currentValue) => total*currentValue, initialValue)
  }
};

const power = function(num1, num2) {
  return num1 ** num2 
};

const factorial = function(num) {
	return num ? num*factorial(num-1) : 1;
};
