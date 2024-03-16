const collegeId = 20220903
let accountEmail = "rahul@gmail.com"
var dept = "CSE"
// prefer not to use var
city = "Baldel"
let state;

// collegeId=20220906  
// not allowed
accountEmail = "gopal@gmail.com"
dept = "ece"
city = "Barrakpur"
console.log(collegeId);

console.table([collegeId, accountEmail, dept, city, state])

// PRIMITIVE DATA TYPES
//  String number boolean null undefined symbol BigInt

// NON PRIMITIVE
//reference , array objects functions


// JavaScript is a `dynamically` typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.


let a=Symbol('213')
let b=Symbol('213')
console.log(a===b)
console.log(typeof a);

const bigNumber=84894565616849846514n
console.log();

let heroes=["shaktiman","nagraj","doga"]
 let myobj={
    name:"Parthib",
    age:21,
 }

 let myfunc=function(){}
 console.log(typeof myfunc);