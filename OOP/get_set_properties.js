function User(email, password) {
    this._email = email
    this._password = password
}
Object.defineProperty(User.prototype, 'email', {
    get: function () {
        return this._email.toUpperCase()
    },
    set: function (value) {
        this._email = value
    }
})

Object.defineProperty(User.prototype, 'password', {
    get: function () {
        return this._password.toUpperCase()
    },
    set: function (value) {
        this._password = value
    }

})
const user1 = new User("ps@yahoo.com", "acbd")
console.log(user1.email);
console.log(user1.password);