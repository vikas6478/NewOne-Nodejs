const fs = require("fs")

fs.unlink("newone.txt",(err)=>{
    if(err) throw err;

    console.log("file delete!");
})