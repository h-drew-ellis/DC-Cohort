const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
var session = require('express-session')


//MiddleWare
app.use(express.urlencoded())
app.use(session({
    secret: "password",
    resave: false,
    saveUninitialized: true
}))

////lists
users = [{ username: "admin", password: "password" }]
products = [{ title: "Moves", category: "lifestyle", price: 100 },
    { title: "skills", category: "lifestyle", price: 1000 },
    { title: "Success", category: "lifestle", price: 1000000000000 },
    { title: "Whiskey ", category: "beverages", price: 20 },
    { title: "Chocolate ", category: "food", price: 2 }
]
carts = []


///Gets

app.get('/register', (req, res) => {
    res.render('register')
})


app.get('/login', (req, res) => {
    res.render('login')
})


app.get('/shop', (req, res) => {
    res.render('shop', { products: products })
})

app.get('/cart', (req, res) => {
    console.log(carts)
    res.render('cart', { carts: carts })

})

///Posts

app.post('/register', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let user = { username: username, password: password }

    let (persistedUser) = users.find(u => u.username == user.username)
    if (persistedUser) {
        res.render('register', { error: 'Names taken, try and be original.' })
    } else {
        users.push(user)
        req.session.username = user.username
        res.redirect('/shop')
    }

})

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let user = users.find(u => u.username == username && u.password == password)

    if (user) {
        if (req.session) {
            req.session.username = user.username
            res.redirect('/shop')
        } else {
            res.redirect("/login")
        }
    } else {
        res.render("login", { error: "Username or password incorrect" })
    }

})

app.post('/cart', (req, res) => {
    let title = req.body.title
    let price = req.body.price
    let user = req.session.username

    let usercart = { title: title, price: price, user: user }
    console.log(title)
        //let usercart = products.filter(cart => cart.username == req.session.username)
    carts.push(usercart)
    res.redirect("shop")
})


//Engines
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')



app.listen(3000, () => {
    console.log("Make Sail!")
})