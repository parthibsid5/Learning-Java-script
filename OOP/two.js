// learning more about prototype

function multiplierBy5(num) {
    return num * 5
}
multiplierBy5.power = 2
// console.log(multiplierBy5(6));
// console.log(multiplierBy5.power);
// console.log(multiplierBy5.prototype);
// console.log(typeof multiplierBy5);


function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.greet = function () {
    console.log(`Hello ${this.username} your score is ${this.score}`);
}
const user1 = new createUser("Raju", 66)
user1.greet()

// creation of a prototype for an array
const arr = [2, 4, 6, 8, 10]
Array.prototype.sum = function () {
    let sum = 0;
    this.forEach((i) => {

        sum = sum + i;
    })
    return sum
}
const totalSum = arr.sum()
console.log(totalSum);