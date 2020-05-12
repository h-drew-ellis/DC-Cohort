const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

let customers = []
app.use(express.urlencoded())
    //pages
app.get('/', (req, res) => {
    res.render('hello')
})
app.get('/customers/:name', (req, res) => {
    let name = req.params.name
    res.render('customers', { name: name })
})

app.get('/add-customer', (req, res) => {
    res.render('add-customer', { customers: customers })
})

app.post('/add-customer', (req, res) => {
    let name = req.body.name
    let age = req.body.age

    let customer = { name: name, age: age }
    customers.push(customer)
    res.redirect('/add-customer')
})

app.listen(3000, () => {
    console.log('All systems go!')
})