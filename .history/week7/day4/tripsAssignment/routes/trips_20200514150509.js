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

    let user = { username: username, passsword: pass }
    users.push(user)
    console.log(`${username} has been added to users`)
    res.redirect("/trips")

})

router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let user = users.find(u => u.username == username && u.password == password)
    if (user) {
        if (req.session) {
            req.session.isAuthenticated = true

            req.session.username = user.username
            res.redirect('/trips')
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect("/register")
    }
})


//Functions
function authenticate(req, res, next) {
    if (req.session) {
        if (req.session.isAuthenticated) {
            next()
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect("/register")
    }
}

module.exports = router