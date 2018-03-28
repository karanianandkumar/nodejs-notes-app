var addNote=(title,body)=>{
    console.log("Adding Note",title,body);
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