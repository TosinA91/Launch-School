let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your firstname?\n');
let lastName = rlSync.question('What is your last name?\n');

console.log(`Hello ${firstName} ${lastName}!`);