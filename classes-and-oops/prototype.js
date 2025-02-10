// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

/*

Notes :====

Prototype in JavaScript - Revision Notes
What is Prototype?
In JavaScript, every object has a built-in property called prototype, which allows objects to inherit properties and methods from other objects. This forms the basis of prototype-based inheritance, enabling objects to share functionality efficiently.

Key Concepts & Behavior:
Prototype Inheritance in Objects:

Objects can inherit properties and methods from other objects using prototypes.
If an object does not have a specific property or method, JavaScript looks for it in its prototype chain.
Prototypes in Built-in Objects:

JavaScript allows modifying built-in prototypes like String, Array, and Object by adding custom methods.
This enables extending the functionality of existing data types, but modifying built-in prototypes is generally discouraged in production code.
Prototype in Objects vs. Arrays:

Methods added to Object.prototype become available to all objects, including arrays and functions.
Methods added to Array.prototype are accessible only by arrays and not by general objects.
Prototype Chain Behavior:

JavaScript follows a prototype chain to resolve properties and methods.
If an object does not have a requested method or property, JavaScript looks up its prototype, then its parent’s prototype, and so on until it reaches Object.prototype.
If the property is still not found, JavaScript returns undefined.
Modern Approach for Prototype Inheritance:

Instead of using the older __proto__ property, JavaScript provides Object.setPrototypeOf() for setting prototype inheritance in a structured manner.
Summary of Prototype Behavior:
Prototypes enable inheritance in JavaScript without class-based structures.
Prototype chaining allows objects to access shared properties and methods efficiently.
Objects can inherit properties from other objects dynamically.
Built-in prototypes can be extended, but modifying them should be done cautiously.
Understanding prototypes is essential for mastering JavaScript’s inheritance model and writing efficient, reusable code. 🚀

*/