marvel_heroes=["thor","ironman","spiderman"]
dc_heroes=["batman","superman","flash"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1]);

// console.log(marvel_heroes.concat(dc_heroes));
const all_heroes=[...marvel_heroes,...dc_heroes] //spread operator

const another_array=[1,2,3,[4,5,6],55,89,[100,200,300,[11,22,33]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Parthib"))
console.log(Array.from("Parthib"))
console.log(Array.from({name:"Tony Stark",age:45}))

let a=100
let b=200
let c=300
console.log(Array.of(a,b,c))
