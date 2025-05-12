// we setting up express setup only

import express, { Request, Response } from "express";

import globalErrorHandlers from "./middlewares/globalHnadlersErrors";
import userRouter from "./user/userRouter";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
// app.use(express.urlencoded({ extended: true }));

// routes
// http methods:  GET, POST, PUT, PATCH, DELETE, etc

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "this is the message" });
});

// register userRouter
app.use("/api/users", userRouter);

// Global error Handlers
// should be placed in the end
// we are not calling this function just passing why express will call it for ourself
app.use(globalErrorHandlers);

export default app;
