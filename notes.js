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
    console.log("List of Notes");
}

var remove=(title)=>{
    console.log("Removed :",title);
}

var getNote=(title)=>{
    console.log("Read ",title);
}
module.exports={
    addNote,
    getAll,
    remove,
    getNote
}