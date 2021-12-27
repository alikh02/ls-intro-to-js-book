let rlsync = require('readline-sync');
let age = rlsync.question('How old are you? ');
age = Number(age);

for (let i = 10; i < 41; i+=10) {
  console.log(`In ${i} years, you will be ${age + i} years old`); 
}