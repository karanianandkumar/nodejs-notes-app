const fs=require('fs');


var fetchNotes=()=>{
    try{
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote=(title,body)=>{
    var notes=fetchNotes();
    var  note={
        title,
        body
    };
    var duplicateNotes=notes.filter((note)=>note.title===title);
    if(duplicateNotes.length==0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        return "Note Title Already Exist";
    }
    
};

var getAll=()=>{
    return fetchNotes();
}

var remove=(title)=>{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((item)=>item.title!=title);
    saveNotes(filteredNotes);
    return notes.length!=filteredNotes.length;
}

var getNote=(title)=>{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((item)=>item.title===title);
    return filteredNotes.length>0?filteredNotes[0]:null;
}

var logNote=(note)=>{
    debugger;

    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports={
    addNote,
    getAll,
    remove,
    getNote,
    logNote
}