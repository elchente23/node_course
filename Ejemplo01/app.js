const fs = require('fs'),
      _ = require("lodash"),
      yargs = require("yargs"),
      notes = require('./notes.js');

const title_command = {
      describe: 'Title of note',
      demand: true,
      alias: 't'
};

const body_command = {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
};

const argv = yargs
      .command('add', 'Add a new note', {
            title: title_command,
            body: body_command
      })
      .command('list', 'List all notes')
      .command('read', 'Read a note', {
            title: title_command,
            body: body_command
      })
      .command('remove', 'Remove a note', {
            title: title_command
      })
      .help()
      .argv;
let command = process.argv[2];

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

      console.log(`Printing ${notes_list.length} note(s)`);
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
