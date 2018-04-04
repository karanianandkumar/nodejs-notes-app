// var obj={
//     name:"Anand"
// }

// var stringObj=JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var person='{"name":"Anand","age":"24"}';
// var personObj=JSON.parse(person)
// console.log(typeof personObj);
// console.log(personObj.name);

const fs=require('fs');

var originalNote={
    title:"TITLE",
    body:"BODY HERE"
};

let originalNoteString=JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');

var note=JSON.parse(noteString);
console.log(typeof note);