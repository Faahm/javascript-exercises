const reverseString = function (string) {
  const stringArr = string.split("");
  const reversed = stringArr.reverse();
  const reversedOutput = reversed.join("");
  return reversedOutput;
};

// Do not edit below this line
module.exports = reverseString;
