const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
var session = require('express-session')
const pg = require('pg-promise')()
const connectionString = "postgres:localhost:5432/blogdb"
const db = pg(connectionString)

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

//Call Database
app.get('/index', (req, res) => {
    db.any('SELECT title FROM shopping_lists;').then(results => {
        res.render('index', { stores: results })
    })
})



app.listen(3000, () => {
    console.log("All systems go!")
})