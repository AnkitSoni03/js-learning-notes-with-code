// there is two way to define or create object 1. singleton 2. object literals


//Object.create(); // return object (singleton)


// symbol use

const MySymbol = Symbol("id");

const MyNewObject = {
    name: "Ankit",
    "full name": "Ankit Soni",
    age: 18,
    email: "VxHhU@example.com",
    isLoggedIn: true,
    [MySymbol]: "myId",
    LastLogginDays: ["Monday", "Tuesday", "Wednesday"]
}

console.log(MyNewObject.name, MyNewObject.email); // return Ankit VxHhU@example.com
console.log(MyNewObject["full name"]); // return Ankit Soni (there is no way to define by . operator) preffer this way
console.log(MyNewObject[MySymbol]); // return myId


// some operation on object

MyNewObject.email = "K4A7o@example.com"; // change the actual value in the object and return K4A7o@example.com
Object.freeze(MyNewObject); // return object (object is not changeable) locked 
MyNewObject.greeting = function () {
    console.log("use strict");
}
MyNewObject.greetingtwo = function () {
    console.log(`hello ${this.name}`); // this keyword is used to access the object (yhis is used for when you want to refer the same object)
    
}
console.log(MyNewObject.greeting()); // return use strict
console.log(MyNewObject.greeting); // return [Function (anonymous)]
console.log(MyNewObject.greetingtwo()); // return hello Ankit



/*

Ways to Create Objects

Singleton: Objects created using Object.create().
Object Literals: Created using {} with key-value pairs.
Symbol Usage

Symbol is used as a unique and immutable property key to avoid naming conflicts in objects.
Accessing Object Properties

Dot Notation: Used for simple keys without special characters.
Bracket Notation: Used for keys with spaces, special characters, or when dynamically accessing properties.
Modifying Object Properties

Properties of an object can be directly updated.
Use Object.freeze() to make an object immutable, preventing any changes to its properties.
Adding Methods

Functions can be added as methods to an object.
The this keyword is used inside methods to refer to the current object instance.
Calling Methods

Methods can be executed using parentheses ().
Printing a method without parentheses returns its reference, not the execution result.
This summary provides key points for revising object concepts, property handling, and method creation in JavaScript.

*/