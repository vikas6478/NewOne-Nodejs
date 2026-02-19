const fs = require("fs")


fs.open("raj.txt","w",(err,data)=>{
    if(err) throw err;

    console.log("file created");
})