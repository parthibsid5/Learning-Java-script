const user = {
    username: "parthib",
    loginCount: 2,
    isSignedIn: true,
    "city": "Kolkata",
    usergender: function () { console.log("male"); }
}
user.getUserDetails = function () {
    console.log(`This is ${this.username}`);
    console.log(this);
}
// user.getUserDetails()
// console.log(user['city'])
// console.log(user.getUserDetails())
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welocme ${this.username}`)
    }
    // return this;
}
const userOne = new User("Parthib", 5, true)
const usrTwo = new User('Rajdeep', 12, false)
// console.log(User.greeting);
// console.log(userOne);
console.log(userOne.constructor);
console.log(usrTwo instanceof User);
console.log(usrTwo instanceof Object);
