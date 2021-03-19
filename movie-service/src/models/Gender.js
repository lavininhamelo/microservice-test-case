import mongoose, { Schema } from "mongoose";

const GenderSchema = new Schema({
  name: String,
});

export default mongoose.model("Gender", GenderSchema);
