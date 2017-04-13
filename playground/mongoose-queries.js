const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


var id = '58ee38bde45a6c634f43efdc11';

if (!ObjectID.isValid(id)) {
    console.log('id not valid');
}

User.find({}).then((users) => {
    console.log('Users', users);
});
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((res) => {
    if (!res) {
        return console.log('id not found');
    }
    console.log('Todo By Id', res);
});//.catch((e) => //console.log(e));