import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String }, // e.g. Beginner, Intermediate, Advanced
  category: String,        // e.g. Frontend, Backend, DevOps
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
});

export default mongoose.model("Skill", skillSchema);
