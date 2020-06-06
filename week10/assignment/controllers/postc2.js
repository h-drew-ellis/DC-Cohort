const express = require('express')
const router = express.Router

const dbs = require('../repository/postdb')


class db {
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.create = this.create.bind(this)
        this.repository = new dbs()
    }

    create(req, res) {
        const title = req.body.title
        const body = req.body.body
        const category = req.body.category

        this.repository.save(title, body, category, (post, error) => {
            if (post) {
                this.getAll(req, res)
            } else {
                res.render('add-post', { message: error })
            }
        })
    }

    addPost(req, res) {
        res.render('add-post')
    }

    getAll(req, res) {
        this.repository.getAll(posts => {
            res.render('index', { posts: posts })
        })
    }

}

module.exports = db