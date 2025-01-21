const a = ["a","b","c"];
const b = ["e","f","g"];

a.push(b);
console.log(a); // return [ 'a', 'b', 'c', [ 'e', 'f', 'g' ] ]

a.push(b[0]);
console.log(a); // return [ 'a', 'b', 'c', 'f ]

let c = a.concat(b);
console.log(c); // return [ 'a', 'b', 'c', 'e', 'f', 'g' ]

const d = [...a,...b];
console.log(d); // return [ 'a', 'b', 'c', 'e', 'f', 'g' ]