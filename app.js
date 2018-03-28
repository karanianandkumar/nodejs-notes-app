const fs=require('fs');
const _=require('lodash');


var command=process.argv[2];
console.log(process.argv);

if(command=="add"){
    console.log("Adding new Note")
}else if(command=="list"){
    console.log("Print List of Notes");
}else if(command=="read"){
    console.log("Read the Notes");
}else if(command=="remove"){
    console.log("Delete Notes");
}else{
    console.log("Command not recognised");   
}