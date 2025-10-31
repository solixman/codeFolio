import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  demoLink: String,
  image: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
  skills: [{ type:  String , ref: "Skill" }]
});

export default mongoose.model("Project", projectSchema);
