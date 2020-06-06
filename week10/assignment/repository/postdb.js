const models = require('../models')

class dbs {
    save(title, body, category, completion) {

        let post = models.Post.build({
            title: title,
            body: body,
            category: category
        })

        post.save().then(savePost => {
            if (savePost) {
                completion(savePost)
            }
        }).catch(error => {
            completion(nil, error)
        })
    }
    getAll(completion) {
        models.Post.findAll().then(posts => {
            completion(posts)
        })
    }
}