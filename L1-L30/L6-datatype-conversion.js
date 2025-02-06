let score = "99";

console.log(typeof score); // return string


console.log(typeof (score));// return string (use score as a method or function)


// case-1
//convert string to number simillarly follows for number to string
let value = String(score);
console.log(typeof value); // return number
console.log(value);// return NaN



//case-2 
// for null
let marks = null;
console.log(typeof marks); // return object
console.log(marks); // return null

//case-3
// for undefined
let marks1;
console.log(typeof marks1); // return undefined
console.log(marks1); // return undefined

/*

sort note:-

"33" => 33
"33abc" => NaN
true => 1
false => 0

*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // return true


let isLoggedIn1 = 0;
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); // return false


let isLoggedIn2 = "";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // return false


let isLoggedIn3 = "Ankit";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3); // return true