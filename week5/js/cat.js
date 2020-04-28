let x = new XMLHttpRequest;
let posts = document.getElementById("posts");

x.addEventListener("load", function() {

    let cat = JSON.parse(this.responseText);

    let post = cat.all.map((q) => {
        if (q.user) {
            return `<li>
                <p>${q.text}</p>
                <label> - submitted by ${q.user.name.first + " " + q.user.name.last}</label>
                </li>`
        }
    })
    posts.innerHTML = post.join("")
});


x.open("GET", "https://cat-fact.herokuapp.com/facts");
x.send();