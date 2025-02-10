class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  // super keyword in used to extract the properties from parent class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*

Inheritance in JavaScript - Revision Notes
Definition:

Inheritance is a mechanism that allows a class to derive properties and methods from another class.
It promotes code reusability and a hierarchical structure.
Parent and Child Classes:

The parent class (superclass) contains common properties and methods.
The child class (subclass) extends the parent class and can have additional properties or methods.
extends Keyword:

The extends keyword is used to create a subclass that inherits from a parent class.
super Keyword:

The super function is used in the constructor of the child class to call the parent class's constructor.
It ensures that inherited properties are initialized correctly.
Method Overriding:

The child class can define its own version of an inherited method, overriding the parent class's implementation.
Instance Checking (instanceof):

The instanceof operator checks whether an object is an instance of a specific class or its parent class.
Key Benefits of Inheritance:

Reduces code duplication.
Enhances code organization and scalability.
Enables better maintainability by following an object-oriented approach.

*/

