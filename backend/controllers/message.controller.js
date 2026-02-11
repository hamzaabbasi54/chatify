import message from "../models/message.js";
import User from "../models/user.model.js";

export const getAllContacts= async (req,res)=>{
    try{
        const loggedinuser= req.user._id;
        const filteredusers= await User.find({_id:{$ne:loggedinuser}}).select("-password")
        res.status(200).json(filteredusers)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}