//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('58e65914f013a85ba68a7869')
    // }).toArray().then((docs) => {
    //     console.log('Todos', JSON.stringify(docs, undefined, 2));
    // }, (e) => {
    //     console.log('unable to fetch todos', e);
    // });

    db.collection('Todos').find({text:{ $ne :'fuck'}}).toArray().then((docs) => {
        console.log('Todos', JSON.stringify(docs, undefined, 2));
    }, (e) => {
        console.log('unable to fetch todos', e);
    });

    db.close();
});
