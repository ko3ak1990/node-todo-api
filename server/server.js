const {ObjectID} = require('mongodb');

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

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (ObjectID.isValid(id)) {
        Todo.findById(id).then((todo) => {
                if (todo) {
                    res.send({
                        msg: "succesfully found object",
                        param: id,
                        todo: todo
                    }).status(200);
                } else {
                    res.status(404).send({
                        msg: "object not found",
                        param: id,
                        status: 404,
                        todo: todo
                    });
                }
            }
            , (e) => {
                console.log(e);
                res.status(400).send({
                    msg: "BAD REQUEST",
                    status: 400
                });
            });
    } else {
        res.send({
            msg: "Invalid request",
            status: 404
        }).status(404);
    }
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};