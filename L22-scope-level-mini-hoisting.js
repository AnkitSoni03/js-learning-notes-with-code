// nested scope

function one(){
    const username = "Ankit"
    function two(){
        const website = "google"
        console.log(username)
    }
    //console.log(website) // cannot access because it is out of scope

    two()
}
one()

// return Ankit

// this process is called closure (important)

/******************** Interesting ***************************/


function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)


// hoisting concept just intro

console.log(addOne1(5))
function addOne1(num){
    return num + 1
}
console.log(addTwo2(5))
const addTwo2 = function(num){
    return num + 2
}

// I got - Cannot access 'addTwo2' before initialization



/*

note -

Scope Types:
Global Scope: Variables declared outside any block or function are accessible everywhere in the code.
Function Scope: Variables declared using var are accessible throughout the function where they are defined.
Block Scope: Variables declared with let and const are confined to the block where they are defined.
Key Concepts:
Hoisting:

Function declarations are moved to the top during compilation, so they can be called before their definition.
Variables declared with var are also hoisted but initialized with undefined.
let and const are hoisted but are not accessible before initialization.
Closures:

A closure is created when a function remembers and accesses variables from its outer scope, even after the outer function has executed.
It allows nested functions to access outer function variables.
Shadowing:

A variable declared in an inner scope with the same name as a variable in the outer scope "shadows" the outer variable within the block.
Best Practices:
Use let and const to avoid accidental overwriting of variables.
Understand hoisting to prevent accessing variables before initialization.
Use closures for maintaining state or creating private variables.


*/