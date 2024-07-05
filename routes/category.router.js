const express = require("express")
const router=express.Router()

const Category=require("../models/category.model");

router.route("/")
.get(async(req,res)=>{
    try{
        const categories=await Category.find({});
        res.json(categories)
    }catch(err){
res.status(404).json({message:"Could not find categories"})
    }
})

module.exports=router;