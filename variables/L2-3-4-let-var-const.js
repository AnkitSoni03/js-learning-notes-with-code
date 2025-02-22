const a = 12345
let b = "Ankit"
var c = "Soni"
d = "My first code in js" 
let e;

//a = 5 //cannot redeclare and reassign
b = 6 //can reassign but not redeclare
c = 7
var c = 8 //can reassign and redeclare
d = 8
console.log(a,b,c,d,e);
console.log(typeof(d)); //return number
console.table({a,b,c,d,e});

/*

Note :-

prefer not to use var
because of issue in the block scope and function scope



1. let:-

Block-scoped (accessible only within the block where declared).
Can be reassigned but not redeclared in the same scope.

2. var:-

Function-scoped (accessible throughout the function).
Can be both reassigned and redeclared in the same scope.

3. const:-

Block-scoped.
Cannot be reassigned or redeclared after initialization.


code result :-

console.log(a,b,c,d,e); = 12345 6 7 8 undefined


and 

console.table({a,b,c,d,e})

┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ a       │ 12345     │
│ b       │ 6         │
│ c       │ 7         │
│ d       │ 8         │
│ e       │ undefined │
└─────────┴───────────┘

*/