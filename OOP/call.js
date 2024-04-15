function setUsername(username){
    //comples db calls
    this.username=username
    console.log("called!");
}
function createUser(username,email,password){
    setUsername.call(this,username)

    this.email=email
    this.password=password
}
const demo=new createUser("Parthib","p@mail.com",352)
console.log(demo);