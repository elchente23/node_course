// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert todo', error);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({       
    //     name: 'Juan Vicente',
    //     age: 35,
    //     location: "culiacán"
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user', error);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});

