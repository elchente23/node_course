console.log('Starting app.js');

const fs = require('fs'),
      _ = require("lodash"),
      yargs = require("yargs"),
      notes = require('./notes.js');

const argv = yargs.argv;

let command = process.argv[2];
console.log(command);

if(command == "add"){
      let note = notes.addNote(argv.title, argv.body);

      if(!note){
            console.log("Note not saved");
      } else {
            console.log("Note created");
            notes.logNote(note);
      }

} else if(command == "list") {
      let notes_list = notes.getAll();

      console.log("Notes found");
      notes_list.forEach((item) => {
            notes.logNote(item);
      });

} else if(command == "remove") {
      let noteRemoved = notes.removeNote(argv.title);
      let message = noteRemoved ? "Note was removed" : "Note not found";

      console.log(message);

} else if(command == "read") {
      let note = notes.getNote(argv.title);

      if(note) {
            console.log("Note found");
            notes.logNote(note);
      } else {
            console.log("Note not found");
      }
} else {
      console.log("Command not recognized");
}
