import mongoose, { Schema } from 'mongoose'

const SessionSchema = new Schema({
  date: Date,
  hour: String,
  movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
})

export default mongoose.model('Session', SessionSchema)
