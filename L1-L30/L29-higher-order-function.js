// for of loop and for in loop

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  console.log(num);
}
/* return 

1
2
3
4
5
6

*/

//or

const greeting = "hello Ankit";
for (const greet of greeting) {
  console.log(`charactor is ${greet}`);
}

/*

return 

charactor is h
charactor is e
charactor is l
charactor is l
charactor is o
charactor is
charactor is A
charactor is n
charactor is k
charactor is i
charactor is t

*/

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// map

const map = new Map();
map.set("name", "Ankit");
map.set("age", 18);
map.set("email", "VxHhU@example.com");
map.set("password", "123456");
map.set("age", 18);
console.log(map);

for (const [key, value] of map) {
  console.log(key + " => ", value);
}

/* return

Map(4) {
  'name' => 'Ankit',
  'age' => 18,
  'email' => 'VxHhU@example.com',
  'password' => '123456'
}

and

name =>  Ankit
age =>  18
email =>  VxHhU@example.com
password =>  123456

*/

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// for of loop in object

const users = {
  name: "Ankit",
  age: 18,
  email: "VxHhU@example.com",
};
// for(const [key,value] of users){
//     console.log(key + "=>" , value)
// }
// return ( users is not iterable by for of loop )

// but use for in loop

for (const key in users) {
  console.log(key + "=>", users[key]);
}

/* return

name =>  Ankit
age =>  18
email =>  VxHhU@example.com
*/

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//for in loop in array

const arr1 = [1, 2, 3, 4, 5, 6];
for (const arr in arr1) {
  //  console.log(arr) // get only keys like 0 1 2 3 4 5
  console.log(arr1[arr]); // get only values like 1 2 3 4 5 6
}

// forin loop in map

const map1 = new Map();
map.set("name", "Ankit");
map.set("age", 18);
map.set("email", "VxHhU@example.com");
map.set("password", "123456");
map.set("age", 18);
console.log(map1);

for (const key in map1) {
  console.log(key);
}

/* return

Map(4) {
  'name' => 'Ankit',
  'age' => 18,
  'email' => 'VxHhU@example.com',
  'password' => '123456'
}
  */

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// for each loop

const coding = ["html", "css", "js", "php", "python", "java"];

coding.forEach((item) => {
  console.log(item);
});

// or

coding.forEach(function (item) {
  console.log(item);
});

/* return

html
css
js
php
python
java
html
css
js
php
python
java

*/

// get data from array whhich is inside the object

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

/* return

javascript
java
python
*/

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
notes -

1. for...of Loop
Used to iterate over iterable objects like arrays, strings, Maps, and Sets.
Returns values of the iterable elements.

2. for...in Loop
Used to iterate over enumerable properties of an object.
Returns keys (property names or indexes).

3. for...of vs for...in
Feature -	for...of,	for...in
Works on -	Arrays, Strings, Maps, Sets	,  Objects, Arrays
Returns -	Values,  	Keys (Indexes/Properties)
Use case -	Iterating elements of an iterable,  	Accessing object properties

4. forEach() Loop
Works only on arrays.
Executes a function for each element.
Does not return a value (undefined).
Cannot be used with break or continue.

5. Looping Over Objects
Objects are not iterable using for...of.
Use for...in to access properties.

6. Looping Over Arrays
Both for...of and forEach() work efficiently.
for...in gives indexes, not values.

7. Looping Over Maps
for...of works with Maps, returning key-value pairs.
for...in does not work on Maps.
Key Takeaways:
Use for...of for iterating over values of arrays, strings, and Maps.
Use for...in for iterating over object properties.
Use forEach() for iterating over arrays when no need to break or continue.





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Higher-Order Functions in JavaScript

What is a Higher-Order Function?
A higher-order function is a function that takes another function as an argument or returns a function. These functions help in making code more reusable and concise.

Why Use Higher-Order Functions?
Reduces code repetition.
Improves readability and maintainability.
Makes functions more flexible.

1. Function Taking Another Function as an Argument

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function showMessage() {
    console.log("Welcome to JavaScript!");
}

greet("Ankit", showMessage);

// Output: Hello, Ankit
           Welcome to JavaScript!


2. Function Returning Another Function

         function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

const double = multiplyBy(2);
console.log(double(5));  // Output: 10
  
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Common Higher-Order Functions in JavaScript
map() – Transforms each element in an array.
filter() – Returns a new array with elements that match a condition.
reduce() – Combines all elements into a single value.
forEach() – Executes a function for each array element.

Example Using map()

const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared);  // Output: [1, 4, 9, 16]



Key Takeaways
Higher-order functions make code more efficient and reusable.
They allow functional programming concepts in JavaScript.
Commonly used functions like map(), filter(), and reduce() are based on this concept.

*/
