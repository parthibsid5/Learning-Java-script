if(true){
//execute , false no execution
}
const userEmail='user1@edu.org.in'
// here the string is taken as true...---->TRUTHY VALUE
if(userEmail) console.log('Got user email');
else console.log("Cant fetch user Email");

//falsy values--
// false, 0, -0,  BigInt 0n  ,"", null, undefined, NaN

// truthy values---
// "0" ,  'false',  " " ,[] , {} ,function(){}

const arr=[]
if(arr.length===0)console.log("Enpty Array");

const obj={}
if(Object.keys(obj).length===0)console.log("Empty Object")
// false==0  ---->true
// false===0 ---->false
// false=="0" --->true
// false=='' --->true

//  ?? Nullish Coalescing Operator : null undefined

let val1;
val1= 5 ?? 10 ?? 56
val1=null ?? 10
val1= undefined ?? null ?? 26
val1=null ?? undefined
console.log(val1);

//Ternary operator  :?
const userLoggedin=true
userLoggedin==true ? console.log("User is ON !") : console.log("User is OFF !!")
