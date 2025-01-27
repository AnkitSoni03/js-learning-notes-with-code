
//case1-

function calculateCardPrice1(num1) { //rest operator
    return num1;
}
console.log(calculateCardPrice1(100, 200, 300)); // return 100 

// but input depends on user then we use rest operator 
//case2- 

function calculateCardPrice2(...num1) { //rest operator
    return num1;
}
console.log(calculateCardPrice2(100, 200, 300)); // return [ 100, 200, 300 ]


//case3- (interview based)

function calculateCardPrice3(val1, val2, ...num1) { 
    return num1;
}
console.log(calculateCardPrice3(100, 200, 300)); // return [ 300 ] because val1=100 val2=200



//************************************************//

//let create an object and used in function

const user = {
    name : "Ankit Soni",
    age : 18,
}
function userDetails(anyobject) {
console.log(` Username is ${anyobject.name} and his age is ${anyobject.age}`)
}
userDetails(user);



//************************************************//

// use with array

const user1 = ["Ankit Soni", 18, "VxHhU@example.com"];
function returnValues(anyarray) {
    return anyarray[2];
}
console.log(returnValues(user1));