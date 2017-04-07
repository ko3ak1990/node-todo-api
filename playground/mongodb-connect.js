//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

// var user = {name: 'andrew', age: 25};
// var {name} = user;
//
// console.log("name:" ,name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: 'true'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Todos').insertOne({
        name: 'Iryna Umanets',
        age: 28,
        location: 'Kiev'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err)
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });

    db.close();

});