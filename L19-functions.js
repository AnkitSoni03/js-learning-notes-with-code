function MyNewFunction() {
    console.log("Hello World");
    console.log("use strict");
    console.log("this keyword");

}

MyNewFunction(); // return Hello World use strict this keyword

/*
note-

MyNewFunction  this is know as reference 
MyNewFunction() this is know as function call or execution

*/

function TwoSum(a,b) { // here a,b is known as parameter
    console.log(a+b);
}

TwoSum(12.5, 10); // return 22.5 and here 12.5 and 10 is known as argument
const result = TwoSum(12.5, 10); // return 22.5 but here result is another variable

console.log("value : ", result); //return value : Undefined

// another way
function Multiplication (a,b) {
    return a*b
    console.log("Hello World"); //never execute (not allowed)
}
const result1 = Multiplication(12, 16);
console.log("value : ", result1); //return value : 192

// more detailing of function

//case1 -
function UserLoggin(username) {
    return ` ${username} just logged in`;
}
console.log(UserLoggin("Ankit")); // return Ankit just logged in

//case2 - if user not provide username then it will return undefined (now fix this issue) )


function UserLoggin(username) {
    if(!username /* or username === undefined */)  {
        console.log("please provide username");
        return 
    }
    else {
    return ` ${username} just logged in`;
    }
}
console.log(UserLoggin()); 


/*

Function Basics

Reference: MyNewFunction (function name without parentheses).
Execution: MyNewFunction() (calls or executes the function).
Parameters vs. Arguments

Parameters: Variables defined in the function declaration (e.g., a, b in function TwoSum(a, b)).
Arguments: Actual values passed when calling the function (e.g., 12.5, 10 in TwoSum(12.5, 10)).
Return Statement

return exits the function and sends a value back to the caller.
Code after return will not execute.
Undefined Return

If a function doesn't explicitly return a value, it returns undefined by default.
Handling Default Behavior

Provide checks (e.g., if (!username)) or default values to avoid issues like undefined.
Best Practices

Always handle edge cases (e.g., missing arguments).
Ensure logical flow with proper placement of return and other statements.

*/