import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  demoLink: String,
  image: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
});

export default mongoose.model("Project", projectSchema);
