// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */  


// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray1 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray1.length) {
    //console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

let score2 = 11

do {
    console.log(`Score is ${score2}`);
    score2++
} while (score2 <= 10);



/* +++++++++++++++++++++++++ important Note ++++++++++++++++++++++++++++++ */


/*

Short Notes on Control Flow in JavaScript
What is Control Flow?
Control Flow refers to the order in which instructions or code are executed in a program.
JavaScript executes code line by line (top to bottom), but this flow can be altered using control flow statements.
Types of Control Flow Statements

1. Sequential Control Flow:
Code executes one line at a time in order.
Default behavior of JavaScript.

2. Conditional Statements:
Used to make decisions in the code based on conditions.

if Statement: Executes code if the condition is true.
if-else Statement: Executes one block of code if true and another if false.
if-else if Ladder: Handles multiple conditions.
switch Statement: Evaluates an expression and matches it against multiple case values.
Example: Use for multi-way branching.

3. Loops (Iterative Statements):
Used to execute a block of code multiple times.

for Loop: Repeats a block for a specific number of times.
while Loop: Repeats a block as long as a condition is true.
do-while Loop: Executes at least once, then checks the condition.
for-in Loop: Iterates over properties of an object.
for-of Loop: Iterates over iterable objects like arrays.

4. Jump Statements:
Used to alter the normal flow by jumping to different parts of the code.

break: Exits a loop or switch statement immediately.
continue: Skips the current iteration and continues with the next.
return: Exits a function and optionally returns a value.

5. Error Handling:
Used to manage unexpected runtime errors.

try...catch: Catches and handles errors.
finally: Executes code after try or catch regardless of the result.
throw: Manually throws an error.

6. Asynchronous Control Flow:
Handles operations that do not complete immediately.

setTimeout & setInterval: Delays or repeats execution after a specific time.
Promises: Used for handling asynchronous operations.
async/await: Simplifies asynchronous code readability.
Key Points to Remember:
Default Flow: Top to bottom, left to right.
Change Flow: Use conditional statements, loops, or jumps.
Always ensure your control flow logic avoids infinite loops or unreachable code.
This note summarizes all aspects of JavaScript control flow concisely.  

*/