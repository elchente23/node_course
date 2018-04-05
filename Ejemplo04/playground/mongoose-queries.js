const {mongoose} = require("./../server/db/mongoose"),
      {Todo} = require("./../server/models/Todo"),
      {User} = require("./../server/models/User"),
      {ObjectID} = require("mongodb");
    
// let id = "5ab1e8d09ebd3d140dc532c7";

// if(!ObjectID.isValid(id)){
//     return console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

let id = "5ab07f92725f7d18159d159e";

if(!ObjectID.isValid(id)){
    return console.log('ID not valid');
}

User.find({
    _id: id
}).then((users) => {
    console.log('Users', users);
});

User.findOne({
    _id: id
}).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User', user);
});

User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));
