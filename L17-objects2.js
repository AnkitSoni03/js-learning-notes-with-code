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

