let rlsync = require('readline-sync');
let fname = rlsync.question('What is your first name? ');
let lname = rlsync.question('What is your last name? ');

console.log(`Hello, ${fname} ${lname}!`);
