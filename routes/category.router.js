const express = require("express");
const categoryHandler = require("../controller/categoryController");
const router=express.Router()


router.route("/")
.get(categoryHandler)

module.exports=router;