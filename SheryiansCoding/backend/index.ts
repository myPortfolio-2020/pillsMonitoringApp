var express = require("express");
// import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:harsh", (req, res) => {
  res.send(`Hello World!`);
});

app.listen(3000, () => {
  console.log("is it running?");
});
