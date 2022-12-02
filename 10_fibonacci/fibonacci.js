const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else {
    let newNum = 0;
    let num1 = 0;
    let num2 = 1;
    for (let i = 0; i < n; i++) {
      newNum = num1 + num2;
      num1 = num2;
      num2 = newNum;
    }
    return num1;
  }
};

// Do not edit below this line
module.exports = fibonacci;
