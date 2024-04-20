class User {
    constructor(email, password) {
        this.password = password
        this.email = email
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password() {
        // return this._password.toUpperCase()
        return `${this._password}kangaroo`
    }
    set password(value) {
        this._password = value
    }
}
const user1 = new User("ps@gmail.com", "acff")
console.log(user1.password);