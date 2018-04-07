const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes');

var argv=yargs.argv;
var command=process.argv[2];

if(command=="add"){
    var note=notes.addNote(argv.title,argv.body);
    console.log(note);
}else if(command=="list"){
   var allNotes=notes.getAll();
   console.log(`Printing ${allNotes.length} note(s).`);
   allNotes.forEach((note)=>notes.logNote(note));
   
}else if(command=="remove"){
    var result=notes.remove(argv.title);
    if(result){
        console.log("Successfully deleted.");
    }else{
        console.log("No Item available with Title");
    }
}else if(command=="read"){
    var result=notes.getNote(argv.title);
    if(result==null){
        console.log("Not Item found with give Title");
    }else{
        notes.logNote(result);
    }
}else{
    console.log("Command not recognised");   
}