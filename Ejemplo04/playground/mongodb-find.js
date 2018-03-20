// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({ 
    //     _id: new ObjectID("5ab0185ab789720bf893007b") 
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log("Unable to fetch todos", error);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:' + count);
    // }, (error) => {
    //     console.log("Unable to fetch todos", error);
    // });

    db.collection('Users').find({ name: "Juan Vicente" }).toArray().then((docs) => {
        console.log(`${docs.length} users found`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log("Unable to fetch todos", error);
    });

    client.close();
});

