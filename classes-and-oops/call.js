function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


/*

Understanding call() in JavaScript
Definition of call()


The call() method in JavaScript is used to invoke a function with a specified this value and arguments passed individually. It allows functions to be executed in a different context, meaning you can explicitly set the this value inside the function.

Behavior of call() in the Given Code:
The SetUsername function is defined to simulate a complex database operation. It assigns the username value to this.username.
The createUser function is a constructor function that takes username, email, and password as arguments.
Inside createUser, the SetUsername function is called using SetUsername.call(this, username). This ensures that the username property is set on the newly created object (this) within createUser.
The new createUser(...) creates a new instance, and console.log(chai) outputs the object with all properties.
Key Takeaways from call():
call() allows borrowing functions from another object and executing them in a different context.
It explicitly sets the this keyword to the provided object.
It is useful in constructor functions where you want to initialize values from another function without duplicating code.
Unlike apply(), call() takes arguments separately instead of in an array.
This pattern is commonly used for function reuse and inheritance in JavaScript before the introduction of ES6 classes. 🚀

*/