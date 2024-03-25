// if made from constructor then singleton

// singleton: Object.create
// object literals {...}

const mySym=Symbol('pair1')

const user_1={
    name:'Suresh',
    "full name":'Suresh Kumar',
    [mySym]:'mypair1', //symbol
    age:30,
    location:'Bangalore',
    email:'suresh@google.com',
}

console.log(user_1.email);
console.log(user_1['email']);
console.log(user_1['full name']);
console.log(user_1[mySym]); //for symbol no ' ' required
console.log(typeof(user_1['mySym']));

// Object.freeze(user_1)
// user_1.email="suresh@yahoo.com"
console.log(user_1)

user_1.greeting=function(){
    console.log("Hello this is user 1");
}
user_1.greetingTwo=function(){
    console.log(`Hello this is ${this["full name"]}`);
}
console.log(user_1.greeting());
console.log(user_1.greetingTwo());

// ++++++++++++++++++++++++ +++++++++++++++++++++++ ++++++++++++++++++++++
//singleton object

// const fbUser=new Object()
const fbUser={
    name:'Sunita',
    'email':'sunita@mail.com',
    isLoggedIn:true,
}
console.log(fbUser);

const ob1={a:97,b:98}
const ob2={c:99,d:100}
const ob3={e:101,f:102}

const ob4={ob1,ob2,ob3}
//console.log(ob4); // { ob1: { a: 97, b: 98 }, ob2: { c: 97, d: 98 }, ob3: { e: 97, f: 98 } } 
// Object.assign({Target},{Source})

// const combined_Obj=Object.assign({},ob1,ob2,ob3)
// using spread operator
const combined_Obj={...ob1,...ob2,...ob3}
console.log(combined_Obj);


console.log(fbUser);
console.log(Object.keys(fbUser));  //array 
console.log(Object.values(fbUser));  //array 
console.log(Object.entries(fbUser)); //array in array
console.log(fbUser.hasOwnProperty(('isLoggedIn')))