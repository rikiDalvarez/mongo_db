import mongoose from "mongoose";
import "dotenv/config";
import config from "./config";

const mongo_uri = config.MONGO_URI;

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
