const promOne = new Promise(function (resolve, reject) {
    // do an async task
    // db calls, cryptography, networl call
    setTimeout(function () {
        console.log("Async is complete!");
        resolve()
    }, 1000)
})
promOne.then(function () {
    console.log("Promise 1 consumed!");
})
// ************************************************************
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2!");
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved!');
})
// ************************************************************
const promThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "parthib", email: "ps@gmail.com" })
    }, 1000);
})
promThree.then(function (user) {
    console.log(user)
})
// ************************************************************
const promFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) { resolve({ id: "infinix_gaming", game: "cod-warzone" }) }
        else { reject('ERROR: something went wrong!') }
    }, 1000)
})
promFour
    .then(function (user) {
        console.log(user);
        return user.username
    })
    .then(function (prevData) {

        console.log(prevData);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () { console.log("promise is either resolved or rejected!") })

// ************************************************************
const promFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ user: "Snehasis", language: "python" })
        }
        else {
            reject('ERROR: python went wrong!')
        }
    }, 1000)
});

async function consumeFromFive() {
    try {
        const response = await promFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumeFromFive()

// ************************************************************
const url = "https://jsonplaceholder.typicode.com/users"
async function getAllUser() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        // console.log(response);
    } catch (error) {
        console.log(error);
    }
}
getAllUser()

// **************************************************
// the above using then and catch

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((prevData) => {
        console.log(prevData);
    })
    .catch((error) => {
        console.log(error);

    })