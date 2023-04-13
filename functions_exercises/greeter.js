
let getName = prompt => { 
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);

// This is slightly different than the solution code but it works