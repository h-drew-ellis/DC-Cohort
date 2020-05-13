const express = require('express')
const app = express()

const tripsRouter = require('./routes/trips')

const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

app.use('/trips', tripsRouter)

app.listen(3000, () => {
    console.log("All Systems Go!")
})