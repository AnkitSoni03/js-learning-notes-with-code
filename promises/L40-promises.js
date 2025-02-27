/*

Promise in JavaScript
Definition:
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Or

A Promise in JavaScript represents a placeholder for a future value. It is an object that handles asynchronous operations and can be in one of three states:

Pending – Initial state, operation not yet completed.
Fulfilled – Operation completed successfully.
Rejected – Operation failed.

*/



/*+++++++++++++++++++++ Basic way of creating promises - 1 ++++++++++++++++++++++++*/

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


/*++++++++++++++++++++++ As a single unit of Promise - 2 +++++++++++++++++++++++++++++++*/


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


/*++++++++++++++++++++++ As a single unit of Promise - 3 +++++++++++++++++++++++++++++++*/


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ankit", email: "abcd@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


/*++++++++++++++++++++++  Promise - 4 +++++++++++++++++++++++++++++++*/


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Ankit", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
 //Chaining concept

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


/*++++++++++++++++++++++  Promise - 5 +++++++++++++++++++++++++++++++*/


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


/* ++++++++++++++++++++++  real implementation of promise (try-catch) +++++++++++++++++++++++*/

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

 /*+++++++++++++++++++++  real implementation of promise (.then - .catch) +++++++++++++++++++++++*/


fetch('https://api.github.com/users/AnkitSoni03')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all


// Note : fetch is a priority queue or micro task queue or fetch queue that is executed first

/*

Fetch in JavaScript
fetch() is a modern API used for making network requests in JavaScript. It returns a Promise that resolves to the Response object when the request is successful.

Internal Working of fetch()
Request Initiation: When fetch() is called, it first sends the request to the network.
Network Layer: The request goes through various stages like DNS lookup, TCP handshake, and SSL/TLS (if HTTPS is used).
Response Handling: Once the server responds, fetch() processes the response.
Microtask Queue: The .then() and .catch() handlers are placed in the Microtask Queue, ensuring they execute after the current synchronous code but before rendering.
Where does fetch() Execute?
The network request itself is handled in a separate thread (Web APIs).
Once the response is received, the callback (then/catch) is added to the Microtask Queue.
The Microtask Queue runs before the next event loop cycle, ensuring higher priority than tasks in the Callback Queue.

-----------------------------------
| Call Stack                      |
-----------------------------------
| Microtask Queue (Promise then)  |
-----------------------------------
| Task Queue (setTimeout, I/O)    |
-----------------------------------
| Web APIs (fetch, timers, etc.)  |
-----------------------------------


*/