import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    }
    catch(error){
        console.log("MongoDB connection error", error)
        process.exit(1) // 1 means failed 0 means passed
    }
}