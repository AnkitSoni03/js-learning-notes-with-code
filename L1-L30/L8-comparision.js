console.log(2 > 1);// return true
console.log(2 < 1);// return false
console.log(2 >= 1);// return true
console.log(2 <= 1);// return false
console.log(2 == 1);// return false
console.log(2 != 1);// return true



console.log("2" > 1);// return true
console.log("2" < 1);// return false
console.log("2" >= 1);// return true
console.log("2" <= 1);// return false
console.log("2" == 1);// return false
console.log("2" != 1);// return true



console.log(null > 0);// return false
console.log(null < 0);// return false
console.log(null >= 0);// return true
console.log(null <= 0);// return false
console.log(null == 0);// return false
console.log(null != 0);// return true


console.log(undefined > 0);// return false
console.log(undefined < 0);// return false
console.log(undefined >= 0);// return false
console.log(undefined <= 0);// return false
console.log(undefined == 0);// return false
console.log(undefined != 0);// return true


/*strict comparision and checking */

console.log("2" === 2);// return false

/*

The === operator in JavaScript is called the strict equality operator. It checks whether two values are:

Equal in value (the actual data).
Equal in type (the data type must also match).
Definition
Strict equality (===) does not perform type conversion. If the types are different, it immediately returns false.

*/