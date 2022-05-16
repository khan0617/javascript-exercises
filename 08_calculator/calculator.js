const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...args) {
  let sum = 0;
  let arr = args[0];
	for(let i = 0; i < arr.length; i++){
    sum += parseInt(arr[i]);
  }
  return sum;
};

const multiply = function(...args) {
  let result = -1;
  let arr = args[0];
  for(let i = 0; i < arr.length; i++){
    if(result == -1){
      result = parseInt(arr[i]);
    }
    else {
       result *= parseInt(arr[i]);
    }
  }
  return result;
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	if(num == 0){
    return 1;
  }
  
  let result = num;
  for(let i = num - 1; i >= 2; i--){
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
