const superheros = ["spiderman", "batman", "superman", "ironman"];

const result = superheros.forEach((hero) => {
    console.log(hero); // return spiderman batman superman ironman
    return hero
});
console.log(result); // return undefined (forEach return undefined r do not return any value)


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Filter()

// basic syntax

const myNum = [1,2,3,4,5,6,7,8,9,10];
let newNums = myNum.filter((num) => num > 5 )
console.log(newNums) // return [6,7,8,9,10]

// another example

const myNum1 = [1,2,3,4,5,6,7,8,9,10];
let newNums1 = myNum1.filter((num) => { return num > 5} ) // here return keyword is required
console.log(newNums1) // return [6,7,8,9,10]


/* ++++++++++++++++++++++++++ direct code from github ++++++++++++++++++++++++++++++++++++++ */


const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  // map()


  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums3 = myNumers.map( (num) => { return num + 10})
//  console.log(newNums3);  // return [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 

//chaining of map and filter

const newNums2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums2); // return [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// reduce()

const myNums4 = [1, 2, 3]

// const myTotal = myNums4.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums4.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

/*

note -

1. forEach()
Iterates over an array and executes a function for each element.
Does not return a new array; always returns undefined.
Useful for performing actions like logging or modifying external variables but not for creating new arrays.

2. filter()
Creates a new array with elements that satisfy a given condition.
Requires a callback function that returns true for elements to be included.
If used with curly braces {}, an explicit return statement is needed.

3. map()
Returns a new array by applying a transformation to each element.
Used for modifying array elements without affecting the original array.
Can be chained with other methods like filter().

4. Chaining Methods
map(), filter(), and reduce() can be used together for efficient data transformation.
Example: First, modify elements using map(), then filter results using filter().

5. reduce()
Used to accumulate a single value from an array.
Takes an accumulator and a current value as arguments.
Requires an initial value (e.g., 0 for summation).
Commonly used for calculating totals, such as cart prices.

*/