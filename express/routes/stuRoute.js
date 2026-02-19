const express = require("express")
const route = express.Router();

route.get("/subject",(req,res)=>{
    res.send("subject page")
})

route.get("/fees",(req,res)=>{
    res.send("fees page")
})


module.exports=route;