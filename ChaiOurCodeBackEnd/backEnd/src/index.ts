import dotenv from "dotenv";
import connectDB from "../src/db/index";
import app from "./app";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log();
    });
  })
  .catch((err) => {
    console.log("error connection:", err);
  });
