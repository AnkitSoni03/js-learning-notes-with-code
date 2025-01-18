/*

JavaScript is a dynamically typed language.

Explanation:
Dynamic typing means that variable types are determined at runtime rather than at compile time.
You do not need to specify the type of a variable when declaring it (e.g., number, string, etc.). Instead, the type is automatically assigned based on the value.
Variables can change their type during execution.

*/

// Primitive Data Types
// 7 types : string, number, boolean, null, undefined, symbol, bigint

// symbol declearation :-

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);//return false
/* values are different */

// bigint : number which is greater than 2^53
const bigNumber = 1234567890123456789012345678901234567890n;



// Reference Data Types Or Non Primitive Data Types

// 2 types : Array, Object, function

// Array declearation :-

const heros = ["spiderman", "ironman", "thor", "captain america"];

// Object declearation :-
let MyObj = {
    name: "Ankit",
    age: 18,
  }// inside { } is object


  //function declearation by variable :-
  const MyFunction = function (){
    console.log("Hello World");
  }
  console.log(typeof MyFunction);// return function or Object function