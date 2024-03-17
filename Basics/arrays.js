const array1 = new Array(2, 4, 6, 8, 10, 12)
console.log(array1);

const array2 = [2, 4, 6, 8, 10, 12]
console.log(array2);

// array2.shift()          //remove from beggining 
// array2.unshift(9)         //enter at beginning
console.log(array2);
console.log(array2.indexOf(9));
console.log(array2.length);

const newarray = array2.join()
console.log(`Now ${newarray} is a ${typeof (newarray)} data type`);


// ***********  SPLICE & SLICE  *************

const A = [11, 22, 33, 44, 55, 66]
console.log(A);
const sliceArray = A.slice(1, 3)
console.log(sliceArray);
console.log(`After slice the Original array is :[${A}]`);
spliceArray = A.splice(1, 3)
console.log(spliceArray);
console.log(`After slice the Original array becomes :${A}`);


// so we see that wlile doing splice thqe origial array is the un--spliced part 
