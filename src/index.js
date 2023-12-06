import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🗄️ Server is Running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connetection Failed !!!", err);
  });

/* 
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error) => {
      console.log("ERRR:", error);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on PORT: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/
