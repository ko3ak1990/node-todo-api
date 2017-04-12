var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        return res.status(200).send(doc);
    }, (e) => {
        console.log(e);
        return res
            .status(400).send(e);
    });

    console.log(req.body);

});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            msg: "succesfully found objects",
            todoArr: todos
        }).status(200);
    }, (e) => {
        console.log(e);
        res.send({
            msg: "FAILED",
            status: 400
        }).status(400);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};