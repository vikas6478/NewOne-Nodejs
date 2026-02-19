const express = require("express")
const app = express()
const ejs = require("ejs")
const stuRoutes = require("./routes/stuRoute")
app.set("view engine","ejs")
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/nodefirstdb").then(()=>{
    console.log("db connect!!")
})

app.use("/",stuRoutes)

app.listen(8000,()=>{
    console.log("server on 8000")
})