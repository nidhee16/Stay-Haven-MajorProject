

const Hotel=require("../models/hotels.model")

const getAllHotelHandler=async(req,res)=>{
    const hotelCategory=req.query.category 
    try{
      let hotels
      if(hotelCategory){
        hotels=await Hotel.find({category:hotelCategory })
      }else{
        hotels=await Hotel.find({});
      }
          
          hotels?res.json(hotels):res.status(404).json({message:"Data not found"})
    }catch(err){
      console.log(err);
      
    }

  }
  module.exports=getAllHotelHandler;

