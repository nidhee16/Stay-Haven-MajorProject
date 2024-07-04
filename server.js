const express = require("express")
const hotelRouter=require("./routes/hotelrouter")
const connectDB=require("")
const app= express();
app.use(express.json())
const PORT =3500;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use("/api/hotels",hotelRouter)

app.listen(process.env.PORT || PORT,()=>{
    console.log("Server is up and running");
})