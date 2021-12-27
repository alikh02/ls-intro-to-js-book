
function greet(question) {
  let rlsync = require('readline-sync');
  let name = rlsync.question(question);
  return name;
}

let fname = greet('What is your first name? ');
let lname = greet('What is your last name? ');

console.log(`Hello, ${fname} ${lname}`);