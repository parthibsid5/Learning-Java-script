class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(uname, email, password) {
        super(uname)
        this.email = email
        this.password = password
    }
    addcourses() {
        console.log(`Few course was added by ${this.username}`);
    }
    logMe() {
        super.logMe()
        console.log(`email is ${this.email}`);
    }
}

const userOne=new Teacher("Sankar","sk@mail.com","sk@2513#")
const usertwo=new Teacher("Rahul","rh@mail.com","rh#@20031")
console.log(userOne.addcourses());
console.log(usertwo.logMe());

// console.log(usertwo===userOne);
// console.log(usertwo===Teacher);
// console.log(usertwo instanceof Teacher);
// console.log(usertwo instanceof User);