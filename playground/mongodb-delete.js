const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndDelete({age:28}).then((docs) => {
        console.log('Todos', JSON.stringify(docs, undefined, 2));
    }, (e) => {
        console.log('unable to fetch todos', e);
    });

    db.close();
});
