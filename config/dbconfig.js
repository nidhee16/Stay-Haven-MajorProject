const mongoose=require("mongoose");
const dotenv=require("dotenv");
const { log } = require("console");

dotenv.config();

const connectDB= async()=>{
try{
    await mongoose.connect(process.env.DATABASE_URI,
        {useUnifiedTopology:true,
            useNewUrlParser:true

        })
}catch(err){
 console.log(err)
}

}

module.exports =connectDB
