let rlsync = require('readline-sync');
function multiply() {
  let num1 = Number(rlsync.question('Enter the first number: '));
  let num2 = Number(rlsync.question('Enter the second number: '));
  let quotient = num1 * num2;
  return `${num1} * ${num2} = ${quotient}`;
}

console.log(multiply());

/* 
**Refactor later
*/