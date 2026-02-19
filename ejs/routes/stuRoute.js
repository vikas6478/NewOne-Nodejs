const express = require("express")
const route = express.Router()
const stuController = require("../controllers/stuController")

route.get("/",stuController.homepage)
route.get("/home",stuController.homepage)
route.get("/about",stuController.aboutpage)
route.get("/contact",stuController.contactpage)

module.exports = route;