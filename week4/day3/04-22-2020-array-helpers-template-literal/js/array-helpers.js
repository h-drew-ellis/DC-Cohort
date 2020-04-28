
let numbers = [3,5,6,7]

// finalNumbers = [6,10,12,14]

let finalNumbers = [] 

for(let index = 0; index < numbers.length; index++) {
    let result = numbers[index] * 2
    finalNumbers.push(result)
}

console.log(finalNumbers)

// ARRAY HELPERS  
// Array Helpers ONLY WORK ON AN ARRAY 

// MAP (RETURNS A BRAND NEW ARRAY)
// numbers = [3,5,6,7]


/*
function doubleValue(number) {
    return number + 1
}

numbers.map(doubleValue) 
*/

/*
let name = "John"

name.map(function(c) {
    console.log(c)
}) */

let array = numbers.map(function(x) {
    //console.log("x is " + x)
    return x * 2
})

// FILTER IS AN ARRAY HELPER 
// FILTER CAN ONLY BE CALLED ON AN ARRAY 

let someNumbers = [1,2,3,4,5,6,7,8,9]

// Final Result = [1,3,5,7,9]
let oddNumbers = [] 

for(let index = 0; index < someNumbers.length; index++) {
    if(someNumbers[index] % 2 != 0) {
        oddNumbers.push(someNumbers[index])
    }
}

// Filter will return true/false 
// true = item is added to the final array 
// false = item is NOT added to the final array 
// let someNumbers = [1,2,3,4,5,6,7,8,9]
let oddNumbersArray = someNumbers.filter(function(no) {

   // console.log(no % 2 != 0)
    return (no % 2) != 0
})

console.log("FILTER RESULT")
console.log(oddNumbersArray)

