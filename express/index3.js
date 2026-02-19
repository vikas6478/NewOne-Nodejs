const express = require("express")
const app = express();
const empRoute = require("./routes/empRoute")
const proRoute = require("./routes/productRoute ")

app.use("/employee",empRoute)
app.use("/product",proRoute)

app.listen(9000,()=>{
    console.log("server 9000")
})  