const express = require("express")
const route = express.Router();

route.get("/info",(req,res)=>{
    res.send("info page")
})

route.get("/store",(req,res)=>{
    res.send("store page")
})
route.get("/sales",(req,res)=>{
    res.send("sales page")
})

route.get("/photo",(req,res)=>{
    res.send("photo page")
})


module.exports=route;