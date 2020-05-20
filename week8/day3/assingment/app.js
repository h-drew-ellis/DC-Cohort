//requires
const express = require('express')
const mustacheExpress = require('mustache-express')
const models = require("./models")

//vars
const app = express()

//parser
app.use(express.urlencoded())

//engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')



//sequlize functions



//gets

app.get('/', (req,res) => {
    models.blog.findAll().then(posts => {
    res.render('index', {posts: posts})})
})

app.get('/create', (req,res) => {
    res.render('create')})

app.get('/post', (req,res) => {
    res.render('post')})
    


//posts
app.post('/create',(req,res) => {
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category

    let post = models.blog.build({
        title:title,
        body: body,
        category:category
    })
    post.save().then(savedPost => {
        res.redirect('/')
    })
})



app.listen(3000, () => {
    console.log("All systems go")
})