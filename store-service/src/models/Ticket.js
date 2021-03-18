import mongoose, { Schema } from 'mongoose'

const TicketSchema = new Schema({
  number: Number,
  user: Object,
  session: Object
})

export default mongoose.model('Ticket', TicketSchema)
