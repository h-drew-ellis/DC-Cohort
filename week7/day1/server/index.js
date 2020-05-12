const express = require('express');
const app = express();
const mustache = require('mustache-express')
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(cors());
app.use(bodyParser.json({ extended: true }));


let list = [];


app



    .get('/todos', function(req, res) {
    res.render('todos')
});

app.post('/todos', function(req, res) {

    let title = req.body.title
    let priority = req.body.priority
    let DTG = req.body.DTG

    list.push({ title: title, priority: priority, date: DTG })

    let success = `Task of ${title} with a ${priority} priority has been added`

    res.json({ message: success })
});

app.listen(port, function() {
    console.log("Server is running")
});