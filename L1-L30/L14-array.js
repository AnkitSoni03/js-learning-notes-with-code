// declaration
const MyArr = [2,4,8,16,32,64,128,256,512,1024, true, "Ankit", null, undefined];
const MyArr1 = new Array(2,4,8,16,32,64,128,256,512,1024, true, "Ankit", null, undefined);


//Array methods

console.log(MyArr.length); // return 13
console.log(MyArr[0]); // return 2

MyArr.push("Soni")
console.log(MyArr);
/* return 

[
  2,    4,         8,
  16,   32,        64,
  128,  256,       512,
  1024, true,      'Ankit',
  null, undefined, 'Soni'
]

add value at last

*/

MyArr.pop()
console.log(MyArr);

/*
return 
[
  2,    4,
  8,    16,
  32,   64,
  128,  256,
  512,  1024,
  true, 'Ankit',
  null, undefined
]


remove last value
*/

MyArr.unshift(5)
console.log(MyArr);
/*
return 
[
  5,    2,    4,
  8,    16,   32,
  64,   128,  256,
  512,  1024, true,
  'Ankit', null, undefined
]
add value at first index
*/

MyArr.shift()
console.log(MyArr);
/*
return 
[
  2,    4,
  8,    16,
  32,   64,
  128,  256,
  512,  1024,
  true, 'Ankit',
  null, undefined
]
remove first value
*/

console.log(MyArr.includes("Ankit")); // return true
console.log(MyArr.includes("Ankit1")); // return false
console.log(MyArr.indexOf("Ankit")); // return 10
console.log(MyArr.indexOf("Ankit1")); // return -1 (that means value not found)

const MyArr2 = MyArr.join()
console.log(MyArr2); // return 2,4,8,16,32,64,128,256,512,1024,true,Ankit,null,undefined and ( convert into string )
console.log(MyArr); // return [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, true, 'Ankit', null, undefined ]



//slice and splice (Imp for interview)

const MyArr3 = [0,1,2,3,4,5];
console.log("A ", MyArr3); // return [ 0, 1, 2, 3, 4, 5 ]

const MyArr4 = MyArr3.slice(1,3);
console.log("After slice (1,3) : ",MyArr4); // return [ 1, 2 ]
console.log("B ", MyArr3); // return [ 0, 1, 2, 3, 4, 5 ]

const MyArr5 = MyArr3.splice(1,3);
console.log("After splice (1,3) : ",MyArr5); // return [ 1, 2, 3 ]
console.log("C ", MyArr3); // return [ 0, 4, 5 ]

/*

Difference Between slice() and splice():
Purpose:

slice(): Extracts a portion of an array.
splice(): Removes or replaces elements in an array.
Effect on Original Array:

slice(): Does not modify the original array (non-destructive).
splice(): Modifies the original array (destructive).
Return Value:

slice(): Returns a new array with the selected elements.
splice(): Returns a new array with the removed elements.
Arguments:

slice(start, end):
Extracts elements from the start index up to (but not including) the end index.
splice(start, count, [items...]):
Removes count elements starting from the start index, and optionally adds new elements.
End Index:

slice(): The end index is exclusive (not included).
splice(): No end index, uses count instead.
Use Case:

slice(): Used for copying a portion of the array.
splice(): Used for editing an array by adding or removing elements.
 
*/


