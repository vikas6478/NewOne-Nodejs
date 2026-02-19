const express = require("express")
const app = express();
const stuRoute = require("./routes/stuRoute")

app.use("/students",stuRoute)


app.listen(9000,()=>{
    console.log("server 9000")
}) 