const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completeAt: {
        type: Number,
        default: null
    }
});

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// let newTodo = new Todo({
//     text: "Cook dinner"
// });

// newTodo.save().then((result) => {
//     console.log("Saved todo", result);
// }, (e) => {
//     console.log("Unable to save todo");
// });

// let otherTodo = new Todo({
//     text: ''
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// },(e) => {
//     console.log("Unable to save", e);
// });

let user = new User({
    email: "mail@domain.com"
});

user.save().then((result) => {
    console.log("User saved", result);
}, (e) => {
    console.log("Unable to save user", e);
});