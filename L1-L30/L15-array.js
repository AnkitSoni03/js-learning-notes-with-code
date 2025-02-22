const a = ["a","b","c"];
const b = ["e","f","g"];

a.push(b);
console.log(a); // return [ 'a', 'b', 'c', [ 'e', 'f', 'g' ] ]

a.push(b[0]);
console.log(a); // return [ 'a', 'b', 'c', 'f' ]

let c = a.concat(b);
console.log(c); // return [ 'a', 'b', 'c', 'e', 'f', 'g' ]

const d = [...a,...b];
console.log(d); // return [ 'a', 'b', 'c', 'e', 'f', 'g' ]

const e = [...a,b];
console.log(e); // return [ 'a', 'b', 'c', [ 'e', 'f', 'g' ] ]

const f = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]],14,15];
const g = f.flat(Infinity); //(at the place of infinity we can write any number)
console.log(g); // return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

console.log(Array.isArray("Ankit")); // return false;
console.log(Array.from("Ankit")); // return [ 'A', 'n', 'k', 'i', 't' ]
console.log(Array.from({name: "Ankit"})); // return [] because we have to define i want array from key or value ( basically based on key-va;ue pair)


const score1 = "100";
const score2 = "200";
const score3 = "300";
console.log(Array.of(score1, score2, score3)); // return [ '100', '200', '300' ]


/*

Note ;-

a.push(b): Adds the entire b array as a single element to a.
a.push(b[0]): Adds the first element of b to a.
a.concat(b): Combines a and b into a new array without modifying a or b.
[...a, ...b]: Combines a and b into a new array using the spread operator.
[...a, b]: Adds all elements of a and b (as a single array) to a new array.
f.flat(Infinity): Flattens all nested arrays in f into a single-level array.
Array.isArray("Ankit"): Checks if "Ankit" is an array (returns false).
Array.from("Ankit"): Converts the string "Ankit" into an array of characters.
Array.from({name: "Ankit"}): Converts an object to an array but returns an empty array without iterable values.
Array.of(score1, score2, score3): Creates an array from provided arguments.

*/