const fs = require("fs")

fs.appendFile("newone.txt","hello everyone",(err)=>{
    if(err) throw err;

    console.log("file created");
})