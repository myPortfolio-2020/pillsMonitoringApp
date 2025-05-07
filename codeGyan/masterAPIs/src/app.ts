import express, { Request, Response } from "express";

import globalErrorHandlers from "./middlewares/globalHnadlersErrors";

const app = express();

// routes
// http methods:  GET, POST, PUT, PATCH, DELETE, etc

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "this is the message" });
});

// Global error Handlers
// should be placed in the end
// we are not calling this function just passing why express will call it for ourself
app.use(globalErrorHandlers);

export default app;
