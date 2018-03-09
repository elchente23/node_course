console.log('Starting app.js');

const fs = require('fs'),
      os = require('os'),
      notes = require('./notes.js');

// let user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username} you're ${notes.age}`);

let res = notes.addNote();

console.log(res);
console.log(notes.add(5, 6));

