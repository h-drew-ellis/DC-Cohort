// Create a Palindrome app in Javascript 
//which will print whether a string is a palindrome or not

function pali(str) {
    let retset = str.split('').reverse().join('');
    if (retset == str) {
        console.log("Is a palindrome.");
    } else {
        console.log("Is NOT a palindrome.");
    }
}

pali("");