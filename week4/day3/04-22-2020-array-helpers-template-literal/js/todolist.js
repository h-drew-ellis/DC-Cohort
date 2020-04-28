// addTaskButton


// value of this is a Window Object 
console.log(this)


//taskTextBox
//pendingList
let pendingList = document.getElementById("pendingList")
let taskTextBox = document.getElementById("taskTextBox")

taskTextBox.addEventListener("mouseover",function() {
    console.log(this)
    console.log("hovering over textbox")
})


let addTaskButton = document.getElementById("addTaskButton")
addTaskButton.addEventListener("click", function() {

    console.log(this)

    console.log(taskTextBox.value)
        // create li element 
    let liItem = document.createElement("li")
    liItem.addEventListener("click",function() {
        // console.log("clicked on the li")
    })

    // creating label 
    let label = document.createElement("label");
    label.innerHTML = taskTextBox.value

    // creating button 
    let removeButton = document.createElement("button")
    removeButton.addEventListener('click', function() {

        // this is button element because currently 
        // we are inside the event of the button 
        console.log(this)

        // code fired when you click the remove button

        //console.log("remove button clicked")

        // pendingList.removeChild(liItem)

    })
    removeButton.innerHTML = 'Remove task'

    liItem.appendChild(label);
    liItem.appendChild(removeButton)

    pendingList.appendChild(liItem);


})




/*
 <ul>
    <li>
    <label>Wash the car</label>
    <button> Remove task </button>
    </li>
        
 </ul>


*/