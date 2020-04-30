let character = "a"

let promise = new Promise((resolve, reject) => {

    if (character == "a" || character == "b") {
        resolve("there it is") // resolve a promise 
    } else {
        reject("nope") // reject the promise 
    }

})
promise.then((something) => {
        console.log("and thennn?")
    })
    // evaluate the promise