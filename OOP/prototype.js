// we learn that in a prototype based language all the prototypes comes from the object itselt which is in the top of the heirarchy so if we "create" a prototype foe the object itselt then by defination the prototype can be used by any array, string or any other datatypes

// function----->
                     
// Array  ----  >Object --->null

// String----->

// so if an object has a prototype called "sum" this will be available for all .. may it be array , function , string...

let heros=['ironman','hulk','spiderman']
let heroPower={
    ironman:"smart suit",
    hulk:'muscle power',
    spiderman:'sling'
}
Object.prototype.Marvel=function(){
    console.log(`All belong to marvel Object`);
}

Array.prototype.display=function(){
    console.log(`Heroes are ${this}`);
}
// heroPower.Marvel()
// heros.Marvel()
// heros.display()
// heroPower.display() // will throw an error

const user={
    name:'Rohan',
    emain:'rohan@mail.com'
}

const teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:teachingSupport
}
teacher.__proto__=user
