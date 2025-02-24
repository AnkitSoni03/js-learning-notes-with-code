/* +++++++++++++++++++++ Immediate Invoked Function Expression (IIFE) +++++++++++++++++++++ */

// basic syntax ()(); here first () is where we write the definition of function and second () is where we execute the function
// IIFE is used to execute the function immediately to avoid polluting the global scope

(function dbConnection() {
    console.log(`Database Connected`);
})(); // ; is use to break the function if we don't use then we get infinite loop


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// normal function and arrow function in IIFE

( function New1() {  // named iife
    console.log(`Database Connected`);
}) ();

/* ++++++++++++++++++++++++ arrow function in IIFE ++++++++++++++++++++++++++++++ */

( () => console.log(`Database Connected`))();  

// if we want to pass the parameter in IIFE

( (user) => console.log(`Welcome, ${user}`))( "Ankit" ); // return Welcome, Ankit


/*

Note :-

1. Definition of IIFE:
IIFE stands for Immediate Invoked Function Expression.
It is a function that gets executed immediately after its definition.
Helps in avoiding pollution of the global scope.
2. Basic Syntax:
Written as ()():
The first () contains the function definition.
The second () executes the function.
3. Purpose of IIFE:
Used to execute code immediately.
Useful for creating isolated scopes, especially in cases like module patterns or initializing scripts.
4. Types of IIFE:
Named IIFE: Provides a name to the function (optional).
Anonymous IIFE: Function without a name is commonly used.
5. Arrow Function in IIFE:
IIFE can be written with arrow functions for brevity.
Example: (() => console.log('...'))();
6. Passing Parameters in IIFE:
Parameters can be passed directly while invoking the function.
Example: (param => console.log(param))('value');
7. Semicolon Importance in IIFE:
Always use a semicolon ; before IIFE to avoid unintended issues (e.g., infinite loops) caused by code concatenation.

*/