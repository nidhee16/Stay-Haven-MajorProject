const Wishlist=require("../models/wishlist.model")

const createWishListHandler=async (req, res) => {
    const newWishList = new Wishlist(req.body)
    try {
        const savedWishlist = await newWishList.save();
        res.status(201).json(savedWishlist)
    } catch (err) {
        res.status(500).json({ message: "Failed to create wishlist" })
    }
}

const deleteWishlistHandler=async(req,res)=>{
    try{
        await Wishlist.findByIdAndDelete(req.params.id)
        res.json({message:"Hotel deleted from Wishlist"})
    }catch(err){
        res.status(500).json({message:"Could not delete hotel from wishlist"})
    }
}

const getWishlistHandler=async(req,res)=>{
    try{
           const wishlist = await Wishlist.find({});
           wishlist?res.json(wishlist): res.json({message:"No items found in wishlist"})
    }catch(err){
console.log(err);
res.json(500).json(err)
    }
}

module.exports={createWishListHandler,deleteWishlistHandler,getWishlistHandler}