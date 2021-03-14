import mongoose, { Schema } from "mongoose";

const GenreSchema = new Schema({
  name: String,
});

export default mongoose.model("Genre", GenreSchema);
