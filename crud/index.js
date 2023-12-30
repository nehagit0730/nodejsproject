const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/newfile.txt`;
// create a new file
fs.writeFileSync(filePath,"this is new file");

//Read the content
fs.readFile(filePath,'utf-8',(err,contents)=>{
    console.log(contents);
});

//update a file
fs.appendFile(filePath,"and this is new text",(err, contents)=>{
    if (!err) {
        console.log("File updated");
    }
});

//delete a file

/*fs.unlink(filePath,(err)=>{
    if (!err) {
        console.log("File deleted");
    }
});*/