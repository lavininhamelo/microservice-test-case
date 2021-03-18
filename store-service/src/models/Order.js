import mongoose, { Schema } from 'mongoose'

const STATUS_ORDER = {
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED',
  WAITING_PAYMENT: 'WAITING_PAYMENT',
  FINISHED: 'FINISHED'
}
const OrderSchema = new Schema({
  name: String,
  quantity: Number,
  session: Object,
  user: Object,
  value: Number,
  date: Date,
  status: {
    type: String,
    enum: [...Object.keys(STATUS_ORDER)],
    required: true,
    default: STATUS_ORDER.PENDING
  }
})

export default mongoose.model('Order', OrderSchema)
