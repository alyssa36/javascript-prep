let rlSync = require('readline-sync');
let name = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${name} ${lastName}!`);