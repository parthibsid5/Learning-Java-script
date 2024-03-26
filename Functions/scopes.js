let a=20
const b=30
var c=50
// console.log(a,b,c);

function one(){
    const name="Rituraj"

    function two(){
        const website="youtube.com"
        console.log(name);
    }
    // console.log(website);
    two()
}
one()


if(true){
    const name="Srilekha"

    if(name==="Srilekha"){
        const city="Amethi"
    }
    // console.log(city);
    
}
// console.log(name);
// **************************************************
console.log(addOne(50));
function addOne(num){
    return num+1
}
addTwo()
const addTwo=function(num){
    return num+2
}
