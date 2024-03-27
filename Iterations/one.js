// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("5 Detected");
//         break
//     }
//     console.log(i);
// }
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 Detected");
        continue
    }
    console.log(i);
}
// **********************************************
let heroes=["ironman","batman","spiderman"]
let arr=0 // iterating variable
while(arr<heroes.length)
{
    console.log(heroes[arr]);
    arr+=1
}

// ++++++++++++++++++++++++++++++++++++++++++++++

let score=11
do{
    console.log(score);
    score++
}while(score<=10)