const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const routesPath = require('./routes/index')
const PORT = 3000

app.use(express.urlencoded)

//engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

//routes
app.use('/', routesPath)

app.listen(PORT, () => {
    console.log('Steady as she goes...')
})