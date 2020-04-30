//- Create an app which removes duplicates from an array 
//Example: ["John","Mary", "Alex", "Steve", "Mary", "John"] 
//Result should be: ["John","Mary","Alex","Steve"]
let list = ["John", "Mary", "Alex", "Steve", "Mary", "John"];
Array.reduce((unique, name) => {
    console.log(name,
        unique,
        unique.includes(name),
        unique.includes(name) ? unique : [...unique, name],
    );

    return unique.includes(name) ? unique : [...unique, name]
}, [])