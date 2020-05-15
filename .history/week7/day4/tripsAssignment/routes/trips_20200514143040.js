const express = require('express')
const router = express.Router()


//GETS
router.get("/", (req, res) => {
    res.render('trips')
})

router.get("/register", (req, res) => {
    res.render('register')
})

router.get("/login", (req, res) => {
    res.render('login')
})


//Posts
router.post("/register", (req, res) => {
    const username = req.body.username
    const pass = req.body.password

    let user = { username: username, passsword: password }
    users.push(user)
    console.log(`${username} has been added to users`)
    res.redirect("/trips")

})

router.post("/login", (req, res) => {
    const username = req.body.username
    const pass = req.body.password

    let user = users.find(u => u.username == username && u.password == password)

})

module.exports = router