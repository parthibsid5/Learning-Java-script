// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPasssword() {
//         return `${this.password}abc`
//     }
//     displayDetails() {
//         return `The username is${this.username} and email is${this.email}`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1 = new User("Hikrit", "hk@gmail.com", "Hk@2003")
// console.log(user1.encryptPasssword());
// console.log(user1.displayDetails());
// console.log(user1.changeUsername());


//behind the scenes using prototypes

function UserTwo(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}
UserTwo.prototype.encryptPasssword = function () {
    return `${this.password}abc`
}

UserTwo.prototype.displayDetails = function () {
    return `The username is${this.username} and email is${this.email}`
}
UserTwo.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}
const user2 = new UserTwo("Robin", "robin@gmail.com", "robi@2001n")
console.log(user2.encryptPasssword())
console.log(user2.displayDetails())
console.log(user2.changeUsername())