const fs=require('fs');
var addNote=(title,body)=>{
    var notes=[];
    var  note={
        title,
        body
    }

    try{
        var notesString=fs.readFileSync('notes-data.json');
        notes=JSON.parse(notesString);
    }catch(e){

    }
    var duplicateNotes=notes.filter((note)=>note.title===title);
    if(duplicateNotes.length==0)
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
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