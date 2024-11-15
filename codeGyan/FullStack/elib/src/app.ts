// this is the setup for express

import express from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middleware/globalErrorHandler";
import userRouter from "./user/userRouter";

// instance of express
const app = express();

// enable json on express so it can take data from req.body - inbuilt middlewear

app.use(express.json());
// routes
// http method GET, POST,PUSH, DELETE

app.get("/", (req, res) => {
  const error = createHttpError(400, "something went wrong");
  throw error;
  res.json({ message: "Welcome to Express!!!!!" });
});

// userRouter

app.use("/api/users", userRouter);

// Global errorHndler

app.use(globalErrorHandler);

export default app;
