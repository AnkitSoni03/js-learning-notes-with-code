/* stack (primitive) memory and heap (non-primitive) memory */


//stack(primitive)

let myName = "Ankit";
let anotherName = myName;
console.log(myName, anotherName); // return Ankit Ankit
anotherName = "Soni";
console.log(myName, anotherName); // return Ankit Soni



// Heap (non-primitive)
let UserOne = {
    email: "VxHhU@example.com",
    name: "Ankit",
    upi: "ankitsoni@ybl"
}

let UserTwo = UserOne;
UserTwo.email = "K4A7o@example.com";
console.log(UserOne.email, UserTwo.email); // return K4A7o@example.com K4A7o@example.com


/*
 Notes :-

Stack (Primitive)
Primitive data types are stored in the stack memory, and variables hold the actual value.
Changing one variable does not affect the other as they are independent copies.

Heap (Non-Primitive)
Non-primitive data types (e.g., objects) are stored in the heap memory, and variables hold references to the same memory location.
Changing the properties of one object affects the other, as they share the same reference.

*/