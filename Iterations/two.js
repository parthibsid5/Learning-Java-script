// for of

// ["","",""]
// [{},{},{}]
const arr=[1,2,3,4,5,6]
const greet="Namaste !"
for (const val of greet){
    console.log(val);
}

// OBJECTS are not iterable using for of**

//Maps
const map=new Map()
map.set("IN","India")
map.set("FR","France")
map.set("UK","United Kingdom")
map.set("SL","Sri Lanka")

// console.log(map);
// console.log(map.keys());
for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//  for in

const myObj={
    "CSK":"chennai super kings",
    "MI":"mumbai indians",
    "GT":"gujrat titans"
}
for (const key in myObj) {
    console.log(myObj[key]);
}

const newArr=[2,4,6,8,12]
for(const val in newArr){
    console.log(newArr[val]);
}
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//  for each
const coding=['js','cpp','java','ruby','assembly']
coding.forEach(function(item){console.log(item);}) // as simple function

coding.forEach((val)=>{console.log(val);}) //as arrow function

function myFunc(val){
    console.log(val);
}
coding.forEach(myFunc)//as a reference not execution() !!

//actually foreach takes 3 argunts : item/value , index, array 
coding.forEach((item,index,Array)=>{console.log(item,index);})

// */-*-/*/*/-*-/*-/*/-*/-*/-*/-*/-*/-*/-*/*/-*/-*/-*/-*/-*/-*/-
//  some inportant scenerios
//  [{},{},{}] useful in databases..

const codingLanguage=[
    {language:"Javascritpt",
    filename:".js"
    },
    {language:"Python",
    filename:".py"
    },
    {language:"Java",
    filename:".java"
    },
    {language:"C",
    filename:".c"
    }
]
codingLanguage.forEach((item)=>{
    console.log(`${item.language} file extension is ${item.filename}`);
})
