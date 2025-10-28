import mongoose from "mongoose";
import dotenv from "dotenv"; 
dotenv.config()

const userSchema = new mongoose.Schema({

    userName: String,
    email:{type:String, required:true, unique:true},
    password:{type:String , required:true},
    role:{type:String, required: true, default: process.env.ROLE }
});

export default mongoose.model('User',userSchema);