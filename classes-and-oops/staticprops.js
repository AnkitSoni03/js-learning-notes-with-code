class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  // static keyword is used to unique and immutable property key and try to give not assessable to user
        return `123`
    }
}

const hitesh = new User("hitesh")

// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

/*

Static Properties and Methods in JavaScript.
The static keyword defines methods that belong to the class itself, not instances.
Static methods cannot access instance properties (this.property).
They are useful for utility functions, unique identifiers, and factory methods.
Static methods are inherited but cannot be accessed via class instances.
In the given code, createId() is a static method and can only be called using User.createId(), not via an instance.

*/