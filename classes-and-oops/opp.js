// Object literal (basic way to create object)

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);  // this function is used for refer the current context and return username: hitesh
        console.log(this);  // return {username: "hitesh", loginCount: 8, signedIn: true, getUserDetails: ƒ}
    }

}
console.log(user.username)
console.log(user.getUserDetails());
console.log(this);  // return {} global context



// constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true) // new keyword is used to create new object and ignore the override problems
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

/*

OOP in JavaScript (Revision Notes)

1. Object Literals (Basic Way to Create Objects)
Objects in JavaScript can be created using object literals, where properties and methods are directly assigned.
The this keyword refers to the current object’s context.
Suitable for single objects but not reusable for multiple instances.

2. Constructor Function (Reusable Object Creation)
A constructor function acts as a template for creating multiple objects dynamically.
The new keyword is used to create new instances, ensuring each object has its own properties and methods.
Prevents object overriding issues and allows better scalability.

3. Key OOP Concepts in JavaScript
Encapsulation: Data and related functions are grouped together within objects.
Abstraction: The internal details of object creation are hidden from the user.
Instance Creation: Each time a constructor function is called with new, a unique instance is created.
Prototype Inheritance: Objects inherit properties and methods through prototypes, reducing memory usage by sharing common behaviors.

4. Importance of OOP in JavaScript
Provides better code organization and reusability.
Helps manage large-scale applications efficiently.
Allows creating multiple instances with shared behavior.

*/