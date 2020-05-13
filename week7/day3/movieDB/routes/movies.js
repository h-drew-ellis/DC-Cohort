let express = require('express')
let router = express.Router()


//Gets
router.get('/', (req, res) => {
    res.render('movies', { movies: movies })
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.get('/delete', (req, res) => {
    res.render('delete', { movies: movies })
})

router.get('/:title', (req, res) => {
    res.render(req.body.movie)
})

//Posts
router.post('/create', (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let imgURL = req.body.imgURL
    let genre = req.body.genre

    let movie = { imgURL: imgURL, title: title, genre: genre, description: description }
    movies.push(movie)
    res.render('create', { title: title })
})

router.post('/delete', (req, res) => {
    let title = req.body.title
    movies = movies.filter(movie => movie.title != title)
    res.render('delete', { movies: movies })
})

module.exports = router