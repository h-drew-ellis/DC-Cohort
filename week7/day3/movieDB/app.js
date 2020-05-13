const express = require('express')
const app = express()

const moviesRouter = require('./routes/movies')

const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

global.movies = []

app.use('/movies', moviesRouter)

app.listen(3000, () => {
    console.log("All Systems Go!")
})