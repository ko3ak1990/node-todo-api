const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({_id: new ObjectID("58e659c3f2ce235bc4fbeb4c")}, {
            $set: {
                location: 'Kiev, Ukraine'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }
    ).then((docs) => {
        console.log('Todos', JSON.stringify(docs, undefined, 2));
    }, (e) => {
        console.log('unable to fetch todos', e);
    });

    db.close();
});
