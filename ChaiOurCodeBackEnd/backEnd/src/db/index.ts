import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`/n Mongoodb connected!!  DB Host ${connectionInstance}`);
  } catch (error) {
    console.log("Mongoose connection error!!!", error);
    process.exit(1);
  }
};
export default connectDB;
