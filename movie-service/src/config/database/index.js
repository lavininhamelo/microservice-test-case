import mongoose from "mongoose";
import "dotenv/config";

export default () => {
  mongoose.set("useCreateIndex", true);

  return mongoose
    .connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_DOCKER_NAME}:27017/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("✅ Database Connected");
      return mongoose.connection;
    })
    .catch((err) => {
      console.log("⭕ Database ERROR ", err);
      return false;
    });
};
