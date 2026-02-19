const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1> welcome my page </h1>")
})

app.get("/home",(req,res)=>{
    res.send("<h1> home page </h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1> about page </h1>")
})

app.get("/contact",(req,res)=>{
    res.send("<h1> contact page </h1>")
})

app.listen(8000,()=>{
    console.log("server 8000")
}) 