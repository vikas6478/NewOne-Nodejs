const fs = require("fs")


fs.writeFile("raju.txt","bye..",(err,data)=>{
    if(err) throw err;

    console.log("file data_change!");
})