class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

/*

Getters and Setters in JavaScript
In JavaScript, getters and setters are special methods that allow controlled access to an object's properties. They are defined using the get and set keywords inside a class.

Getter (get): A getter method retrieves (gets) the value of a property. In the provided code, the email getter returns the email in uppercase.

Setter (set): A setter method allows modifying (setting) a property while adding custom logic. Here, the password setter assigns the value, and the getter appends "hitesh" to it before returning.

These methods help in data encapsulation, validation, and modification before accessing or updating a property.

*/