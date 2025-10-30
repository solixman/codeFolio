import mongoose from "mongoose";

const BlacklistedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: '7d' } 
});

export default mongoose.model("BlacklistedToken", BlacklistedTokenSchema);