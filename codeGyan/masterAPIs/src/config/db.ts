import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("database is connected successfully");
    });

    mongoose.connection.on("error", (error) => {
      console.log(
        error,
        "This is the error that found after initial connection"
      );
    });

    // always after connect.on lines
    await mongoose.connect(config.dataBaseUrl as string);

  } catch (error) {
    console.log(`DB is not connected successfully`, error);
    process.exit(1);
  }
};

export default connectDB;

// why not export default connectDB()
// because here exporting the function definition itself,
// not the result of calling the function.
