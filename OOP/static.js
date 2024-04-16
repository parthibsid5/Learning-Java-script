class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME : ${this.username}`);
    }
    static createId() {
        return `123`
    }
}
// const userone = new User('Franky')
// console.log(userone.createId());
// createId is not available 

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email

    }
    logMe() {
        console.log(`EMAIL : ${this.email}`);
    }

}
const usertwo = new Teacher("harry", "har@MediaList.com")

console.log(usertwo.logMe());
// console.log(usertwo.createId());