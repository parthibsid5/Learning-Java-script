// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);//cannot over ride

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor.value)
// console.log(descriptor);

// Object.defineProperty(Math,"PI",{
//     writable:true,
//     configurable:true,
//     enumerable:true
// })
// const getDescription=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(getDescription);




const user1 = {
    username: "Dhoni",
    jersyNum: 7,
    isAvailable: true,
    playIpl: function () {
        console.log('Will play ipl')
    }
}
// console.log(user1);
console.log(Object.getOwnPropertyDescriptor(user1, "username"));
// // we can also define properties
Object.defineProperty(user1,'username',{
    // writable: false, //no value change 
    enumerable: false, //no loop
    // configurable: false //cannot be deleted 
})


// console.log(Object.getOwnPropertyDescriptor(user1, "isAvailable"));
// console.log(Object.entries(user1)); // returns an array of the obj items
for (let [key, value] of Object.entries(user1)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
// the above code will only execute if 'ennumeration' if "true" !!


//using forEach
// const arrayEntries=Object.entries(user1)
// arrayEntries.forEach(([key,value])=>{
//     console.log(`${key} : ${value}`);
// })