
/******************************         NUMBERS          *************************************/

const score = 400;
console.log(score); // return 400 (automatically detect number)


const balance = new Number(100); // always return number
console.log(balance); // return [Number: 100] (specially for number)


//convert number to string
console.log(balance.toString()); // return 100 but convert into string
console.log(balance.toString().length); // return 3
console.log(typeof balance.toString()); // return string


console.log(balance.toFixed(2)); // return 100.00



const otherNumber = 123.456;
console.log(otherNumber.toFixed(2)); // return 123.46
console.log(otherNumber.toPrecision(3)); // return 123

const hundred = 1000000;
console.log(hundred.toLocaleString()); // return 1,000,000 (automatically detect US standard in dollar)
console.log(hundred.toLocaleString("en-IN")); // return 1,00,00,000 (automatically detect INDIA standard in rupees)





/**************************************************        MATHS        *************************************************/



console.log(Math); // return Object [Math] {}

console.log(Math.abs(-4)); // return 4 always return positive number
console.log(Math.round(4.3)); // return 4 always return round number
console.log(Math.round(4.6)); // return 5 always return round number
console.log(Math.ceil(4.3)); // return 5 always and return ceiling number
console.log(Math.floor(4.3)); // return 4 always and return floor number

console.log(Math.random()); // return random number between 0 and 1
console.log(Math.random() * 10); // return random number between 0 and 10
console.log((Math.random() * 10) + 1); // return random number between 1 and 10

console.log(Math.sqrt(16)); // return 4
console.log(Math.pow(2,4)); // return 16
console.log(2 ** 4); // return 16

console.log(Math.max(2,3,4,5,6,7,8,9,10)); // return 10
console.log(Math.min(2,3,4,5,6,7,8,9,10)); // return 2



const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min )) + min); // return random number between 10 and 20
 