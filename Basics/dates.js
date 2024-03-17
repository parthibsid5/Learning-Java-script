let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
// const newdate=new Date("03-17-2024") 
const newdate=new Date(2024,2,17,11,5) 
console.log(newdate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(newdate.getTime());

let anotherDate=new Date()
console.log(anotherDate.getDate());

let customizedDate=anotherDate.toLocaleDateString('default',{
    weekday:"short",
    timeZoneName:"long",
    era:"long"

})
console.log(customizedDate);
