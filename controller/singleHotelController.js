
const Hotel=require("../models/hotels.model")


const singleHotelHandler=(async(req,res)=>{
    try{
        const {id}=req.params
        const hotel=await Hotel.findById(id);
        res.json(hotel)
    }
    catch(err){
res.status(404).json({message:"Could not find Hotel with the given ID"})
    }
})
module.exports=singleHotelHandler;