const user = {
    username : "Ankit",
    age : 18,

    welcomeMessage : function () {
        console.log(`${this.username}, just logged in`);  // this function is used for refer the current context (here current context is username : "Ankit")
        //console.log(this)
    }
}
user.welcomeMessage() // return Ankit, just logged in
user.username = "Soni"
user.welcomeMessage() // return Soni, just logged in
console.log(this) // return {} global context

/* 
console.log(this)

return -
Ankit, just logged in
{
  username: 'Ankit',
  age: 18,
  welcomeMessage: [Function: welcomeMessage]
}
Soni, just logged in
{
  username: 'Soni',
  age: 18,
  welcomeMessage: [Function: welcomeMessage]
}
*/


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//important

function UserLoggin() {
    let username = "Rahul"
    console.log(this.username) // return undefined ( this is not work in the function)
}
UserLoggin()


// onother example

const Hello = function () {
    let username = "Rahul"
    console.log(this.username)
}
Hello() // return undefined

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Arrow Function 

const Hello1 = () => {
    let username = "Rahul"
    console.log(this.username)
}
Hello1() // return undefined

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// basic syntax of arrow function  () => {} 

const TwoSum = (a,b) => {
    return a+b
}
console.log(TwoSum ( 4,8) ) // return 12

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// implicit return arrow function

const TwoSum1 = (num1, num2) => (num1 + num2)  // no need of return keyword because we used () bracket but when we use {} then we need to use return keyword
console.log(TwoSum1 ( 4,8) ) // return 12

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// when we want to return object

const TwoSum2 = (num1, num2) => ({ username : "Ankit", age : 18 }) // object always use {} and return in ()
console.log(TwoSum2 ( 4,8) ) // return { username: 'Ankit', age: 18 }



/*

note -

1. this in Objects:
Refers to the current object context.
Used to access properties and methods within the object.
2. Property Updates in Objects:
Changing object properties reflects in methods using this.
3. this in Functions:
In regular functions, this refers to the global object or undefined in strict mode.
Local variables inside the function are not accessible via this.
4. Arrow Functions and this:
Arrow functions do not have their own this; they inherit this from the enclosing context.
this inside arrow functions is static and does not depend on how the function is called.
5. Basic Syntax of Arrow Functions:
Compact syntax for functions using () => {}.
If using {}, a return statement is required for returning values.
If using (), the return is implicit.
6. Implicit Return in Arrow Functions:
When parentheses () are used, the return keyword is not needed.
7. Returning Objects in Arrow Functions:
Objects must be wrapped in parentheses () to distinguish them from function bodies.

*/