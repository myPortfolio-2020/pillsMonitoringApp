import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("database connected successfully atLast");
    });
    mongoose.connection.on("err", (err) => {
      console.log("database connected successfully", err);
    });
    await mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    console.log("failed to connect", err);
    process.exit(1);
  }
};

export default connectDB;
