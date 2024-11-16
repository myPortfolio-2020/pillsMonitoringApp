// import express from "express";
require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Always use /with path like /twitter

app.get("/twitter", (req, res) => {
  res.send("Rabab");
});

// you can send h1 to

app.get("/login", (req, res) => {
  res.send("<h1>this is h1<h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
