const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(args) {
  return args.reduce((total, currentItem)=> total + currentItem ,0);
};

const multiply = function(args) {
  return args.reduce((total, currentItem)=> total*currentItem, 1);
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
	let result = 1;
  for(let i = 1; i <= num ; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
