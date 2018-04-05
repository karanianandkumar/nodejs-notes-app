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
   notes.getAll();
}else if(command=="remove"){
    notes.remove(argv.title);
}else if(command=="read"){
    notes.getNote(argv.title);
}else{
    console.log("Command not recognised");   
}