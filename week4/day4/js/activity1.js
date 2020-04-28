let firstNameTextBox = document.getElementById("firstNameTextBox");
let lastNameTextBox = document.getElementById("lastNameTextBox");
let submitButton = document.getElementById("submitButton");
let fullname = document.getElementById("fullname")

submitButton.addEventListener("click", function() {
    let first = firstNameTextBox.value
    let last = lastNameTextBox.value
    fullname.innerHTML = `<label>full name is ${first} ${last}</label> "`
    console.log(fullname)
})