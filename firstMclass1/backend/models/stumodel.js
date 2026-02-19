const mongoose = require("mongoose");


const stuSchema = new mongoose.Schema({

    empno: Number,
    name: String,
    designation : String,
    salary: Number
})
module.exports = mongoose.model("student", stuSchema);