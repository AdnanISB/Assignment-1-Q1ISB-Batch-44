// Tests for equality and inequality with strings
let language = 'TypeScript';
console.log(`Is the language TypeScript? I predict True.`);
console.log(language == 'TypeScript');

let os = 'Windows';
console.log(`Is the OS Linux? I predict False.`);
console.log(os != 'Linux');

// Tests using the lower case function
let food = 'Pizza';
console.log(`Is the food pizza? I predict True.`);
console.log(food.toLowerCase() == 'pizza');

let fruit = 'Apple';
console.log(`Is the fruit apple? I predict False.`);
console.log(fruit.toLowerCase() != 'apple');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 18;
console.log(`Is the age greater than 21? I predict False.`);
console.log(age > 21);

let temperature = 80;
console.log(`Is the temperature less than or equal to 70? I predict False.`);
console.log(temperature <= 70);

// Tests using "and" and "or" operators
let isWeekend = true;
let isHoliday = false;
console.log(`Is it the weekend and a holiday? I predict False.`);
console.log(isWeekend && isHoliday);

let isRaining = false;
let isSnowing = true;
console.log(`Is it raining or snowing? I predict True.`);
console.log(isRaining || isSnowing);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log(`Is banana in the array? I predict True.`);
console.log(fruits.includes('banana'));

let animals = ['cat', 'dog', 'rabbit'];
console.log(`Is snake in the array? I predict False.`);
console.log(!animals.includes('snake'));

