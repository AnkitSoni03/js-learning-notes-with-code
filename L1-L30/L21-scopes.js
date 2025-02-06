// {} this is scope

// case-1

var c = 300 // global scope
if (true) {
    var c = 30
    //block scope
}
console.log(c) // return 30 


// case-2

let b = 300 
if (true) {
    let b = 30
    console.log(b) // return 30
}
console.log(b) // return 300

