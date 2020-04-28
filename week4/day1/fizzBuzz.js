//Create FizzBuzz app
function fB(n) {
    let nums = [];
    for (let i = n; nums.length <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Fizz-Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            break;
        }
    }
}
fB();