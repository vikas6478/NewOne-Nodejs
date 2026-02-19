const stuModel = require("../models/stuModels")


const homepage=(req,res)=>{
    res.render("Home")
}
const aboutpage=(req,res)=>{
    res.render("About")
}
const contactpage=(req,res)=>{
    res.render("Contact")
}

module.exports={
    homepage,
    aboutpage,
    contactpage
}