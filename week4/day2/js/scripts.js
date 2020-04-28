let taskBox = document.getElementById("taskInput");
let submit = document.getElementById("submit");
let pending = document.getElementById("pending");
let comp = document.getElementById("comp");


submit.addEventListener("click", function() {
    let task = taskInput.value;
    let li = document.createElement("li");
    let cb = document.createElement("input");
    let del = document.createElement('button');
    cb.setAttribute("type", "checkbox");
    del.innerHTML = 'Delete';
    cb.addEventListener("click", function() {
        comp.appendChild(pending.li);
        del.innerHTML = 'Delete';
    })
    del.addEventListener("click", function() {
        li.parentElement.removeChild(li);
    })
    console.log(task);
    tasking = document.createTextNode(task);
    li.appendChild(cb);
    li.appendChild(tasking);
    li.appendChild(del);
    pending.appendChild(li);
});