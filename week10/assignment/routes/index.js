const express = require('express')
const router = express.Router()
const comcontrol = require('../controllers/postc2')

const c2 = new comcontrol()

router.get('/', c2.getAll)
router.get('/add-movie', c2.addPost)
router.post('/add-movie', c2.create)

module.exports = router