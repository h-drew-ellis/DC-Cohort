let x = new XMLHttpRequest;
let moviesList = document.getElementById("moviesList")
x.addEventListener("load", function() {

    let shop = JSON.parse(this.responseText)

    let order = Object.values(shop)
})
moviesList.innerHTML = movie.join("")



x.open("GET", "https://dc-coffeerun.herokuapp.com/api/coffeeorders");
x.send()