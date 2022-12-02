const palindromes = function (s) {
  var re = /[\W]/g;
  var lowRegS = s.toLowerCase().replace(re, "");
  var reverseS = lowRegS.split("").reverse().join("");
  return reverseS === lowRegS;
};

// Do not edit below this line
module.exports = palindromes;
