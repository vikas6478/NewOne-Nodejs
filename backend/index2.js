const http = require("http");
const fs = require("fs")

http.createServer((req,res)=>{

 fs.readFile("vik.txt",(err,data)=>{
    if(err) throw err;
    res.write(data);
    res.end()
 })
    

}).listen(9000, ()=>{
    console.log("server run on part 9000")
})