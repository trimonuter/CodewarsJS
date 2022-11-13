// url: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// program: 1_basicOperations.js

function basicOp(op, a, b){
  return (op == '+') ? a + b 
  : (op == '-') ? a - b 
  : (op == '*') ? a * b
  : a / b
}