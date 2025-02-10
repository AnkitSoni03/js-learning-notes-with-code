const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

 console.log(descripter); 

 // return -

//  {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
  

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // not override

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

/* 
Note -

in this chapter I learn about the adbance of object in js
where I used Object.getOwnPropertyDescriptor(Math, "PI") where I will able to see the properties of the object and also able to control the object using the Object.defineProperty() 
*/