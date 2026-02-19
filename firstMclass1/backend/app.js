const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const stuRoute=require("./routes/stuRoute");



app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/satya").then(() => {
    console.log("db conected")
})

app.use("/employees", stuRoute)
// app.use(express.json());

app.listen(8000, () => {
    console.log("server run on 8000");
})