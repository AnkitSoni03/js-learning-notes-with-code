"use strict"; // treat all js code as newer version

//alert("Ankit")  // we are using nodejs, not browser 

let name = "Ankit"
let age = 18
let isLoggedIn = true
let state = null // ignore undefined value


/* Datatypes in JS (premitive)
 
1. number => 2  to power 53 [ range ->  (-2^53 -1)  to (2^53 -1) ]
2. string => " "
3. boolean => true or false
4. undefined
5. null => empty value
6. bigint => number which is greater than 2^53 or no limit
7. symbol => unique

Summary
✅ Primitive: String, Number, BigInt, Boolean, Undefined, Null, Symbol
✅ Non-Primitive: Object (including Arrays & Functions)

*/

//object

console.log(typeof 18);
// return number

console.log(typeof "Ankit");
// return string

console.log(typeof true);
// return boolean

console.log(typeof undefined);
// return undefined

console.log(typeof null);
// return object (null is a object)