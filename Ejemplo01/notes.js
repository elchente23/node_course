const fs = require("fs");

let fecthNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');

        return JSON.parse(notesString);
    }
    catch(e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fecthNotes();

    var note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title == title);

    if(duplicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fecthNotes();
};

let removeNote = (title) => {
    let notes = fecthNotes();
    let filteredNotes = notes.filter((note) => note.title != title);
    saveNotes(filteredNotes);

    return notes.length != filteredNotes.length;
}

let getNote = (title) => {
    
    let notes = fecthNotes();

    let note_item = notes.filter((note) => note.title == title);

    return note_item[0];
};

let logNote = function(note){
    console.log("______");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
    logNote
};