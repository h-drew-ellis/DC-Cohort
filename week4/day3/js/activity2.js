numbers = [1, 2, 3, 4, 5]

let double = numbers.map(function(x) {
    return x * 2;
});

let even = numbers.filter(function(x) {
    return (x % 2) == 0;
})

let users = [
    { name: "Jay", age: 34 },
    { name: "John", age: 20 },
    { name: "Mary", age: 45 }
]