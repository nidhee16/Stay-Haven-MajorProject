const express=require('express')
const CryptoJS=require("crypto-js")
const jwt=require('jsonwebtoken')
const User=require("../models/user.model")

const loginHandler=(async(req,res) =>{
    try{
       const user = await User.findOne({number : req.body.number})
       !user && res.status(401).json({message:"Invalid mobile number"})

       const decodePassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)
       const {password,...rest} = user._doc;
       const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN)

       decodePassword !== req.body.password && res.status(401).json({message:"Incorrect Password"});

       res.json({...rest,accessToken}); 
   }catch(err){
       console.log(err)
    }
  })
module.exports=loginHandler;