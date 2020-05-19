//requires
const express = require('express')
const mustacheExpress = require('mustache-express')
const pg = require('pg-promise')()
var session = require('express-session')

//require vars
const app = express()
const connectionString = "postgress:localhost:5432/blogdb"
const db = pg(connectionString)

//parser
app.use(express.urlencoded())

//session
/*app.use(session({
    secret = 'password',
    resave = false,
    saveUninitialized = true,
}))*/

//engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

//gets
app.get('/', (req, res) => (
    db.any('SELECT postsid,title FROM posts;').then(results => {
        res.render('index', { posts: results })
    })
))

app.get('/post/:title', (req, res) => {
    let title = req.params.title
    db.one('SELECT title,body,date_created,date_updated FROM posts WHERE title=$1', [title]).then(data => {
        res.render('post', data)
    })
})

app.get('/create', (req, res) => {
    res.render('create')
})


///posts
app.post('/create', (req, res) => {
    let title = req.body.title
    let body = req.body.title
    db.none('INSERT INTO posts(title,body) VALUES($1,$2)', [title, body]).then(() => {
        res.redirect('/')
    })
})


app.listen(3000, () => {
    console.log('Steady as she goes')
})