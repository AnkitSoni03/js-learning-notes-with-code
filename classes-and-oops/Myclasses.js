// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*

Classes in JavaScript (ES6) - Revision Notes
Definition:

A class in JavaScript is a template for creating objects, introduced in ES6.
It provides a structured way to define properties and methods.
Constructor Method:

The constructor is a special method that initializes object properties when an instance is created.
Prototype Methods:

Methods defined inside a class are automatically assigned to the prototype of the object.
This helps in memory optimization by avoiding method duplication in each instance.
Instance Creation:

Objects (instances) of a class are created using the new keyword.
Behind the Scenes (Prototypal Inheritance):

Before ES6, JavaScript used constructor functions and prototypes to achieve similar functionality.
The class syntax is essentially a cleaner way to implement prototype-based inheritance.
Key Advantages of ES6 Classes:

More readable and structured code.
Easier to create and manage objects.
Supports inheritance using the extends keyword.
Provides better encapsulation and modularity.

*/