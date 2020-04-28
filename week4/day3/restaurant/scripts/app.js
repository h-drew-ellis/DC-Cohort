let start = document.getElementById("start");
let entrees = document.getElementById("Entrees");
let desserts = document.getElementById("Desserts");
/*
Starters
*/
let apps = dishes.filter(function(x) {

    return x.course == "Starters";
});
apps.map(function(x) {
    let li = document.createElement("li");
    let title = document.createElement("label");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let val = document.createElement("label");
    title.innerHTML = x.title;
    img.src = x.imageURL;
    info.innerHTML = x.description;
    val.innerHTML = x.price;
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(info);
    li.appendChild(val);
    start.appendChild(li);
});
/*
Entrees
*/
let entr = dishes.filter(function(x) {

    return x.course == "Entrees";
});
entr.map(function(x) {
    let li = document.createElement("li");
    let title = document.createElement("label");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let val = document.createElement("label");
    title.innerHTML = x.title;
    img.src = x.imageURL;
    info.innerHTML = x.description;
    val.innerHTML = x.price;
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(info);
    li.appendChild(val);
    entrees.appendChild(li);
});
/*
Desserts
*/
let dess = dishes.filter(function(x) {

    return x.course == "Desserts";
});
dess.map(function(x) {
    let li = document.createElement("li");
    let title = document.createElement("label");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let val = document.createElement("label");
    title.innerHTML = x.title;
    img.src = x.imageURL;
    info.innerHTML = x.description;
    val.innerHTML = x.price;
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(info);
    li.appendChild(val);
    desserts.appendChild(li);
});