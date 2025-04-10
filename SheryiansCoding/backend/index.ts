var express = require("express");
var path = require("path");
// import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/profile/:username", (req, res) => {
  res.send(`welcome ${req.params.username}`);
});

app.get("/author/:userNm/:age", (req, res) => {
  //   res.send(req.params);
  res.send(
    `welcome, ${req.params.userNm} - I know your age is ${req.params.age}`
  );
});

app.listen(3000, () => {
  console.log("is it running?");
});
