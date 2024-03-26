const user={
    username:"Parthib",
    id:152,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the gamming environment`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Rudranil"
// user.welcomeMessage()

console.log(this); //in browser this will bw window object

function myFunction(){
    let username="Parthib"
    // console.log(this);
    console.log(this.username);
}
myFunction()
// ************************Arrow Function**************************

const myFunction2=()=>{
    console.log("this is an arrow function");
}
myFunction2()

//explici  return statement
const addnum=(num1,num2)=>{
    return num1+num2
}
console.log(addnum(55,66));

//implicit reeturn statement
const addnum2=(num1,num2)=>(num1+num2)
console.log(addnum2(45,23));