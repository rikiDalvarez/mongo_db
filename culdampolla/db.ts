import mongoose from "mongoose";
import "dotenv/config";
import config from "./config";

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
