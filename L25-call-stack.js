/*

What is a Call Stack in JavaScript?
The Call Stack in JavaScript is a mechanism that manages the execution of functions in your code. It works like a stack of plates, following the LIFO (Last In, First Out) principle—functions added last are executed first.

How the Call Stack Works:
When a function is called, it is added (or "pushed") to the top of the stack.
When the function finishes execution, it is removed (or "popped") from the stack.
The stack keeps track of which function is currently being executed.
Example for Understanding:  

*/

function first() {
    console.log("This is the first function");
    second();
}

function second() {
    console.log("This is the second function");
    third();
}

function third() {
    console.log("This is the third function");
}

first();

/*
Step-by-Step Execution in the Call Stack:
The first() function is called → it is added to the stack.
Stack: first
Inside first(), second() is called → it is added to the stack.
Stack: first, second
Inside second(), third() is called → it is added to the stack.
Stack: first, second, third
third() completes execution and is removed from the stack.
Stack: first, second
second() completes execution and is removed from the stack.
Stack: first
first() completes execution and is removed from the stack.
Stack: (empty)
Key Points to Remember:
The Call Stack processes one function at a time (synchronous execution).
If a function calls another function, the new function is added to the top of the stack.
Once all functions are executed, the stack becomes empty.
Errors like Maximum call stack size exceeded occur when too many functions are added without being removed (e.g., infinite recursion).




-----------------------------------
|         function3()            |  <-- Top of the stack (currently executing)
-----------------------------------
|         function2()            |  <-- Waiting to execute after function3 completes
-----------------------------------
|         function1()            |  <-- Waiting to execute after function2 completes
-----------------------------------
|         main()                 |  <-- Initial function, starts execution
-----------------------------------
|         (Empty Stack)          |  <-- When all functions are completed
-----------------------------------

*/