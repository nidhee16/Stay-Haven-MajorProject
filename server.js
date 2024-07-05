const express = require("express");
const mongoose=require("mongoose");


const hotelRouter=require("./routes/hotelrouter");
const hoteldataAddedToDBRouter=require("./routes/dataimport.router");
const categorydataAddedToDBRouter=require("./routes/categoryimport.router");
const categoryRouter=require("./routes/category.router")

const connectDB=require("./config/dbconfig");
const app= express();


app.use(express.json())
connectDB();
const PORT =3500;

app.get('/',(req,res)=>{
    res.send("Hello World")    
})

app.use("/api/hoteldata",hoteldataAddedToDBRouter);
app.use("/api/categorydata",categorydataAddedToDBRouter);
app.use("/api/hotels",hotelRouter)
app.use("/api/categories",categoryRouter)


app.listen(process.env.PORT || PORT,()=>{
    mongoose.connection.once("open",()=>{
        console.log("Connected to DB")
})
console.log("Server is up and running");
})
