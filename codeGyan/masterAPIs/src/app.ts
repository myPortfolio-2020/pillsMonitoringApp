import express from "express";

const app = express();

// routes
// http methods:  GET, POST, PUT, PATCH, DELETE, etc

app.get("/", (req, res) => {
  res.json({ message: "this is the message" });
});

export default app;
