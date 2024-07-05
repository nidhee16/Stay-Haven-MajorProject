const express = require("express")

const Category=require("../models/category.model");
const categories = require("../data/categories");

const router=express.Router();

router.route("/")
.post(async(req,res)=>{
  try{
   await Category.deleteMany();
    const categoryInDB= await Category.insertMany(categories.data);
    res.json(categoryInDB)
  }catch(err){
    console.log(err);
    res.json({message:"Could not add categories to DB"})
  }
})

module.exports=router;