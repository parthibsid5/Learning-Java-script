function todayWeather() {
    console.log("Sunny");;
}
// todayWeather    --->reference to the function
todayWeather()   //--->invoking/executing the function

function addition(num1,num2){
    console.log(num1+num2);
}
addition(2,"we") //2we
const result=addition(2,9)
console.log(result);  //undefined since nothing returned from the function

function multi(num1,num2){
    return num1*num2;
}
console.log(multi(7,8))

// ****************************************************

function calculateCartPrice(a,b,...num1){
    return num1
}
console.log(calculateCartPrice(456,125,520,699,1999));

const user={
    username:"zaplava",
    id:1259006,
    game:"COC"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and ID is ${anyobject.id}`);
}

handleObject(user)
handleObject({
    username:"hybridsmam",
    id:1259007,
    game:"COC"

})

const myNewArray=[100,200,300,400,500,600]
function showThirdElement(array){
    console.log(`The third element in the array is ${array[2]}`)
}

showThirdElement(myNewArray)