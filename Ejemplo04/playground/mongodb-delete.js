// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({ name: "Juan Vicente" }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ name: "Mike" }).then((result) => {
        console.log(result);
    });

    //client.close();
});

