const express=require('express')
const router =express.Router()

const Hotel=require("../models/hotels.model")

router.route("/:id")
.get(async(req,res)=>{
    try{
        const {id}=req.params
        const hotel=await Hotel.findById(id);
        res.json(hotel)
    }
    catch(err){
res.status(404).json({message:"Could not find Hotel with the given ID"})
    }
})


module.exports=router;