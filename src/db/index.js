import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstacne = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `🗄️ MongoDB Connected DB HOST 🛢️: ${connectionInstacne.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error 😢:", error);
    process.exit(1);
  }
};
export default connectDB;
