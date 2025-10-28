import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  city: String,
  description: String,
  startDate: { type: Date, required: true },
  endDate: Date,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
});

export default mongoose.model("Experience", experienceSchema);
