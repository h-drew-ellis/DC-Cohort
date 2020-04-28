//Take the array [3,4,56,7,8,1] and sort them in ascending and descending order
let list = [3, 4, 56, 7, 8, 1];

let up = list.sort(function(a, b) { return a - b })
console.log(up);

let down = list.sort(function(a, b) { return b - a })
console.log(down);