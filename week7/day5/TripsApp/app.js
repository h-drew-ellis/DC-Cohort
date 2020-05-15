const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
var session = require('express-session')

app.use(express.urlencoded())

app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: true,
}))


//engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


//Lists
let trips = []
let users = [{ username: 'johndoe', password: 'password' }]



//// Gets ////

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/trips', (req, res) => {
    let mytrips = trips.filter(trip => trip.username == req.session.username)
    res.render('trips', { trips: trips, username: req.session.username })
})


//// Posts ////

app.post('/trips', (req, res) => {
    let city = req.body.city
    let DFL = req.body.DFL
    let RFL = req.body.RFL

    let trip = { city: city, DFL: DFL, RFL: RFL }
    trips.push(trip)
    res.redirect('/trips')
})

app.post('/register', (req, res) => {

    let username = req.body.username
    let password = req.body.password

    let user = { username: username, password: password, address: "1200 Richmond" }

    // check if username has already been taken 
    let persistedUser = users.find(u => u.username == user.username)

    if (persistedUser) { // username has already been registered
        res.render('register', { message: 'Username is already registered' })
    } else { // username is not taken
        users.push(user)
            //res.render('login')
        res.redirect('/login')
    }

})

app.post('/login', (req, res) => {

    let username = req.body.username
    let password = req.body.password

    let user = users.find(u => u.username == username && u.password == password)

    if (user) {

        // create a session 
        if (req.session) {
            // put username into session 
            req.session.username = user.username
            res.redirect('/trips')
        } else {
            res.redirect('/login')
        }

    } else {
        // username or password is incorrect
        res.render('login', { message: 'Username or password is incorrect' })
    }

})



app.listen(3000, () => {
    console.log('Server is running.')
})