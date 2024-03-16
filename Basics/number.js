const score = 200
const balance = new Number(121.696694)
console.log(balance.toString().split('.'));
console.log(balance.toFixed(3));

console.log(balance.toPrecision(4));
console.log(score.toString().length);

// +++++++++++++ Maths ++++++++++++++++

console.log(Math);
console.log(Math.abs(-65));
console.log(Math.round(4.5));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(4.5, 5.6, 4.0, 4.61));

// 0.1 0.2 ... 0.9

const random = Math.floor(Math.random() * 6 + 1)
console.log(random);

const max = 20
const min = 10

const val=Math.floor(Math.random() * (max - min + 1)+min)
console.log(val)