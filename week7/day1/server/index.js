const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

let list = [];

app.use(cors());
app.use(express.json());

app.get('/todos', function(req, res) {
    res.json(list)
});

app.post('/todos', function(req, res) {

    let id = req.body.id
    let title = req.body.title
    let priority = req.body.priority
    let DTG = req.body.DTG

    list.push({ title: title, priority: priority, date: DTG })

    let succes = `Task of ${title} with a ${priority} priority has been added`

    res.json({ message: succes })
});

app.listen(port, function() {
    console.log("Server is running")
});