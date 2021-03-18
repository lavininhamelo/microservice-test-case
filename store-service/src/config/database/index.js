import mongoose from 'mongoose'
import 'dotenv/config'
const mongo_URL =
  process.env.MONGO_URL ||
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_IP}:${process.env.DB_PORT}/${process.env.DB_NAME}`

mongoose.connect(mongo_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})

export default mongoose.connection
