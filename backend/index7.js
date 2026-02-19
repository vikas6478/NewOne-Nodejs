const fs = require("fs")

fs.rename("raj.txt","satya.txt",(err)=>{
    if(err) throw err;

    console.log("file rename!");
})