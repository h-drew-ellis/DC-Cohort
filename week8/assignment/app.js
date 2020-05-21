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

app.get('/', (req, res) => {
    models.Blog.findAll().then(posts => {
        res.render('index', { posts: posts })
    })
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.get('/post/:postid', (req, res) => {

    let postid = req.params.postid
    console.log(postid)
    models.Blog.findByPk(postid, {
        include: [{
            model: models.Comment,
            as: 'comments'
        }]
    }).then(blog => {
        console.log(blog.dataValues)
        res.render('post', blog.dataValues)
    })

})



//posts
app.post('/create', (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category

    let post = models.Blog.build({
        title: title,
        body: body,
        category: category
    })
    post.save().then(savedPost => {
        res.redirect('/')
    })
})

app.post('/comment', (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let id = req.body.postid

    let comment = models.Comment.build({
        title: title,
        body: body,
        post_id: id
    })
    comment.save().then(commented => {
        res.redirect(`/post/${id}`)
    })
})



app.listen(3000, () => {
    console.log("All systems go")
})