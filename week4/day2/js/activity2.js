let red = document.getElementById("red");
let blue = document.getElementById("blue");

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    color = red;
})

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
    color = red;
})