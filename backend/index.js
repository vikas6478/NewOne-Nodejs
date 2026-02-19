const http = require("http");
http.createServer((req,res)=>{
    res.write("<h1> hello")
    res.end()
}).listen(8000)