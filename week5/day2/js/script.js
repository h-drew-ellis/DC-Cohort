let request = new XMLHttpRequest();
request.onload = function() {
    console.log(this.responseText)
}

let user = {
    email: "johnsmith@somthing.com",
    password: "password"
}

request.open("POST", "https://reqres.in/api/register")
request.setRequestHeader("Content-Type", "application/json")
request.send(JSON.stringify(user))