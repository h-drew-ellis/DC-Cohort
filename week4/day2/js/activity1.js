// access textbox  
let firstNameTextBox = document.getElementById("firstNameTextBox")
let lastNameTextBox = document.getElementById("lastNameTextBox")
    // access button 
let submitButton = document.getElementById("submitButton")

//fullNameTextBox.value // ???

/*
function submitButtonPressed() {
    console.log("Submit button pressed")
} */

submitButton.addEventListener("click", function() {

    // get the value in the textbox 
    let firstName = firstNameTextBox.value;
    let lastName = lastNameTextBox.value;
    let fullName = firstName + " " + lastName;
    // print out the value on the console 
    console.log(fullName);

})