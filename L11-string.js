const name = "Ankit";
const repoCount = 50;

console.log( repoCount + name + " value"); // return 50Ankit Value
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //(` `) this symbol is know is backticks, and also prefered Method and return Hello my name is Ankit and my repo count is 50


//string methods or function
const GameName = new String("Fortnite"); //string is working on string object as key and value pair
console.log(GameName); // return Fortnite
console.log(GameName[0]); // return F
console.log(GameName.length); // return 8
console.log(GameName.toUpperCase()); // return FORTNITE
console.log(GameName.toLowerCase()); // return fortnite
console.log(GameName.charAt(2)); // return t
console.log(GameName.indexOf("t")); // return 2
console.log(GameName.slice(0,4)); // return Fort
console.log(GameName.slice(0,GameName.length)); // return Fortnite
console.log(GameName.substring(0,4)); // return Fort
console.log(GameName.split("")); // return [ 'F', 'o', 'r', 't', 'n', 'i', 't', 'e' ]

const newString = GameName.substring(0,4);
console.log(newString); // return Fort



//trim
const newString1 = "     Fortnite     ";
console.log(newString1); // return     Fortnite
console.log(newString1.trim()); // return Fortnite  remove extra space
console.log(newString1.trimStart()); // return Fortnite     remove extra space from start
console.log(newString1.trimEnd()); // return     Fortnite remove extra space from end



//replace
const url = "https://google.com";
console.log(url.replace("https","http")); // return http://google.com


console.log(url.includes("Ankit")); // return false 
console.log(url.includes("google")); // return true


//split
const str = "Ankit Soni";
console.log(str.split(" ")); // return [ 'Ankit', 'Soni' ]
console.log(str.split("-")); // return [ 'Ankit Soni' ]
