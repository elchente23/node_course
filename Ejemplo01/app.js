console.log('Starting app.js');

const fs = require('fs'),
      _ = require("lodash"),
      yargs = require("yargs"),
      notes = require('./notes.js');

const argv = yargs.argv;

let command = process.argv[2];
console.log(command);

if(command == "add"){
      notes.addNote(argv.title, argv.body);
} else if(command == "list") {
      notes.getAll();
} else if(command == "remove") {
      notes.removeNote(argv.title);
} else if(command == "read") {
      notes.getNote(argv.title);
} else {
      console.log("Command not recognized");
}
