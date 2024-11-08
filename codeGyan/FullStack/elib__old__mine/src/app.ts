// this is the setup for express

import express from "express";

// instance of express
const app = express();

// routes
// http method GET, POST,PUSH, DELETE

app.get("/", (req, res) => {
  res.json({ message: "welcome to express" });
});




export default app;
