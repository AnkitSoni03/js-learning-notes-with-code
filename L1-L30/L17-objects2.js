const Facebook = new Object(); //singleton object
const Google = {}; //object literal or non singleton object

Google.id = "123";
Google.email = "K4A7o@example.com";


console.log(Facebook); // {} return nothing empty
console.log(Google); // return {} return nothing empty after putting  value - { id: '123', email: 'K4A7o@example.com' }

//nested method in object

const user = {
    name: "Ankit",
    age: 18,
    fullname : {
        userfullname: {
            firstname: "Ankit",
            lastname: "Soni"
        }
    }
}

console.log(user.fullname); // return { userfullname: { firstname: 'Ankit', lastname: 'Soni' } }
console.log(user.fullname.userfullname); // return { firstname: 'Ankit', lastname: 'Soni' }
console.log(user.fullname.userfullname.firstname); // return Ankit

// some operation on object

const user1 = { 1: "a", 2: "b", 3: "c" };
const user2 = { 4: "d", 5: "e", 6: "f" };
const user3 = Object.assign({}, user1, user2);
console.log(user3); // return { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } 
console.log({...user1, ...user2}); // return { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } prefered


// objects in array

const Arr = [
    {
        name: "Ankit",
        age: 18
    },
    {
        name: "Ankit",
        age: 18
    },
    {
        name: "Ankit",
        age: 18
    },
    {
        name: "Ankit",
        age: 18
    }
]

console.log(Arr);
/* 
[
  { name: 'Ankit', age: 18 },
  { name: 'Ankit', age: 18 },
  { name: 'Ankit', age: 18 },
  { name: 'Ankit', age: 18 }
]
*/

console.log(Arr[0].name); // return Ankit



//important

console.log(Object.keys(user1)); // return [ '1', '2', '3' ]
console.log(Object.values(user1)); // return [ 'a', 'b', 'c' ]
console.log(Object.entries(user1)); // return [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ] ]
console.log(user1.hasOwnProperty(3)); // return true
console.log(user1.hasOwnProperty(4)); // return false

/*

JavaScript Objects Summary
Creating Objects:

Singleton Object: Created using the new Object() syntax, but it is rarely used.
Object Literal: A simpler and more common way to create objects using curly braces {}.
Adding Properties:
Properties can be added dynamically to an object using dot notation or square bracket notation.

Nested Objects:
Objects can contain other objects as properties. These are referred to as nested objects, and their values can be accessed using dot notation for each level.

Merging Objects:

Objects can be merged using the Object.assign() method or the spread operator (...).
The spread operator is preferred for its simplicity and readability.
Objects in Arrays:
Arrays can hold multiple objects as elements. Each object can have its own set of key-value pairs. Specific properties can be accessed using the array index and the object's key.

Key Object Methods:

Object.keys(): Returns an array of all the keys in the object.
Object.values(): Returns an array of all the values in the object.
Object.entries(): Returns an array of key-value pairs in the object.
hasOwnProperty(): Checks whether a specific key exists in the object.
These concepts are essential for working with objects in JavaScript efficiently.

*/