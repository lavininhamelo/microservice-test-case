import mongoose, { Schema } from 'mongoose'

const MovieSchema = new Schema({
  name: String,
  genders: [{ type: Schema.Types.ObjectId, ref: 'Gender' }]
})

export default mongoose.model('Movie', MovieSchema)
