let number = 10;
let negnumber = -number;
console.log(negnumber);// return -10


console.log(2+3);// return 5
console.log(2-3);// return -1
console.log(2*3);// return 6
console.log(2/3);// return 0.6666666666666666
console.log(2%3);// return 2
console.log(2**4);// return 16


let str1 = "Ankit";
let str2 = "Soni";
console.log(str1 + " " + str2);// return Ankit Soni


/* tricky conversion */
console.log("1" + 2);// return 12
console.log(1 + "2");// return 12
console.log("1" + 2 + 2);// return 122
console.log(1 + 2 + "2");// return 32
console.log(1 + "2" + 2);// return 122
console.log(true);// return true
console.log(false);// return false
console.log(true + false);// return 1
console.log(true - false);// return 1
console.log(true * false);// return 0
console.log(true / false);// return Infinity
console.log(true % false);// return 1
console.log(true ** false);// return 1
console.log(false ** false);// return 1
console.log(true ** true);// return 1
console.log(false ** true);// return 0
console.log(null + 1);// return 1
console.log(null - 1);// return -1
console.log(+true);// return 1
console.log(+false);// return 0


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.table({num1, num2, num3});

//postfix
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);// return 101


//prefix
let gameCounter1 = 100;
++gameCounter1;
console.log(gameCounter1);// return 101

/*
difference between postfix and prefix

Postfix (variable++): Uses the current value first, then increments.
Example:

javascript
Copy
Edit
let x = 100;
console.log(x++); // 100
console.log(x);   // 101


Prefix (++variable): Increments the value first, then uses the updated value.
Example:

javascript
Copy
Edit
let x = 100;
console.log(++x); // 101
console.log(x);   // 101

*/