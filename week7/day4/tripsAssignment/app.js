const express = require('express')
const app = express()
const tripsRouter = require('./routes/trips.js')
const mustacheExpress = require('mustache-express')
var session = require('express-session')


//MiddleWare
app.use(express.urlencoded())
app.use("/trips", authenticate, tripsRouter)
app.use(session({
    secret: "password",
    resave: false,
    saveUninitialized: true
}))



//Engines
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


//Global Declarations
global.trips = []
global.users = []


//Functions
function authenticate(req, res, next) {
    if (req.session) {
        if (req.session.isAuthenticated) {
            next()
        } else {
            res.redirect('/trips/login')
        }
    } else {
        res.redirect("/trips/login")
    }
}

app.listen(3000, () => {
    console.log('Steady as she goes')
})