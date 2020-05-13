let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.render('trips')
})

router.get('/houston', (req, res) => {
    res.render('houston')
})

module.exports = router