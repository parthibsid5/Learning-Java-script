// const coding=["Javascript","python","ruby","cpp"]
// const values=coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(values)
// so we got that `for each `does not return any value

// F I L T E R

const myNums = [5, 7, 9, 6, 2, 3, 8]
// explicit return in arrow  function
// const newNums=myNums.filter((num)=>{return num>5})
// implicit return in arrow  function
const newNums = myNums.filter((num) => (num > 5))
console.log(newNums);

const empt = []
myNums.forEach((item) => {
    if (item > 5) {
        empt.push(item)
    }
})
console.log(empt);

// *********************************************************************

const books = [
    {
        title: "Book One",
        genre: "Fiction",
        publishing_year: 2018
    },
    {
        title: "Book Two",
        genre: "Nonfiction",
        publishing_year: 2020
    },
    {
        title: "Book Three",
        genre: "History",
        publishing_year: 2015
    },
    {
        title: "Book Four",
        genre: "Fiction",
        publishing_year: 2019
    },
    {
        title: "Book Five",
        genre: "Nonfiction",
        publishing_year: 2022
    },
    {
        title: "Book Six",
        genre: "History",
        publishing_year: 2017
    }
]

// const userBooks=books.filter((bk)=>bk.genre==="History")
const userBooks = books.filter((bk) => bk.publishing_year > 2015 && bk.genre === "History")
console.log(userBooks);

// M A P
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers=myNumbers.map((item)=>{return item+20})

// chaining
const newNumbers = myNumbers
    .map((item) => item * 10)
    .map((item) => item + 1)
    .filter((item) => item > 50)

console.log(newNumbers);

// R E D U C E
const myArray = [1, 2, 3, 4, 5, 6]
// const myTotal=myArray.reduce(function (acc,currVal){
//     console.log(`Acc: ${acc} and CurVal: ${currVal}`);
//     return acc+currVal
// },0)


const myTotal = myArray.reduce((acc, curVal) => acc + curVal, 0)

console.log(myTotal);

// example

const shoppingCart = [
    {
        itemName: 'Tshirt',
        price: 399
    },
    {
        itemName: 'Pants',
        price: 299
    },
    {
        itemName: 'Jeans',
        price: 599
    },
    {
        itemName: 'Tital watch',
        price: 1399
    },
    {
        itemName: '4k Monitor',
        price: 3699
    }
]
const cartTotal=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(cartTotal);
