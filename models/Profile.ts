import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: String,
  title: String,
  phone: String,
  pfp: String, // profile picture URL
  location: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Profile", profileSchema);
