//Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.//

let firstName = 'David';
let lastName = 'James';

console.log(`${firstName} ${lastName}`);

//Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936://

let number = 4936;
let ones = number % 10;;
console.log(ones);

number = (number - ones) / 10;
let tens = number % 10;
console.log(tens);

number = (number - tens) / 10;
let hundreds = number % 10;
console.log(hundreds);

let thousands = (number - hundreds) / 10
console.log(thousands);

// Identify the data type for each of the following values:

// 'true' – string
// false – boolean
// 1.5 – number
// 2 – number 
// undefined - Undefined
// { foo: 'bar' } – object


// Explain why this code logs '510' instead of 15. console.log('5' + 10);//

// The code logs 510 because any expression with the + operator produces a string no matter what the other operand is. //

// Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.//


console.log(Number('5') + 10);

// Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

// The value of 5 + 10 is 15.

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Create an array named names that contains a list of pet names

let names = ['dusty', 'rover', 'spot', 'bubbles']

// Create an object named pets that contains a list of pet names and the type of animal.

let pets = {'bingo': dog, 'sandy': cat, 'dusty': cat, }

// What value does the following expression evaluate to?

// 'foo' === 'Foo' - false

// What value does the following expression evaluate to?

// parseInt('3.1415') - 3

// What value does the following expression evaluate to?

// '12' < '9' - true

//Write a program name greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program://


let name = 'Victor';
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);

//Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.//

let age = 20;
console.log(`You are ${age} years old.`)
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);