const express=require("express");
const route =express.Router();
const stuController=require("../controllers/stuController");

route.post("/save",stuController.stuSave);
route.get("/display",stuController.empDisplay);
route.delete("/delete/:id",stuController.empDelete);
route.put("/empUpdate/:id",stuController.empUpdate);
route.get("/getone/:id", stuController.empUpdategetOne);
route.get("/search",stuController.empSearch);


module.exports=route;