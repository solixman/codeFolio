import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g. GitHub, LinkedIn
  link: { type: String, required: true },
  logo: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
});

export default mongoose.model("Link", linkSchema);
