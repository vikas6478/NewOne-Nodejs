const http = require("http");
const uc = require("uppercase")

http.createServer((req,res)=>{

    res.write(uc("hello satya!"));
    res.end()
  
}).listen(9000, ()=>{
    console.log("server run on part 9000")
})