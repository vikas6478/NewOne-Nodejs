const http = require("http");

http.createServer((req,res)=>{
    res.write("<h1> hello")
    res.write("<h1> bye")
    res.end()

}).listen(9000, ()=>{
    console.log("server 9000")
})