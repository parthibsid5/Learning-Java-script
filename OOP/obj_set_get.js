const User={
    _email:"ps@gmail.com",
    _password:'vwe',

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email=value
    }
}
const user1=Object.create(User)
console.log(user1._email);