// import express from "express";
var express = require("express");

const app = express();
// if you want to get rid of require and want to use import
// then add "type": "module", in package.json


// ass soon as the code runs first app.run runs then jusps to the page requested from browser/ frontend
app.use(function (req, res, next) {
  console.log("middleware 001");
  next();
});

app.use(function (req, res, next) {
  console.log("middleware 02");
  next();
});

// after middleware this code will run according to path from browser

app.get("/", function (req, res, next) {
  return next(
    new Error("something wrong on home, this mess appear on console")
  );
});

app.get("/profile", function (req, res, next) {
  return next(
    new Error("something wrong on Profile, this mess appear on console")
  );
});

// Error handler
// this part will go on frontEnd means on Browser
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("runs on frontEnd");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
