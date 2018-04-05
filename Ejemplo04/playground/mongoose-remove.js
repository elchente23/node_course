const {mongoose} = require("./../server/db/mongoose"),
      {Todo} = require("./../server/models/Todo"),
      {User} = require("./../server/models/User"),
      {ObjectID} = require("mongodb");
   
//Elimina todo
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: ''}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('').then((todo) => {
    console.log(todo);
});