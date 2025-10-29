import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: {type:String,default:'loves coding'},
  title:  {type:String,default:'Full-Stack Developer'},
  phone:  {type:String,default:'+212-690544179'},
  pfp:  {type:String,default:'https://www.pinterest.com/pin/12033123998717968/'}, 
  location:  {type:String,default:',o address yet'},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Profile", profileSchema);
