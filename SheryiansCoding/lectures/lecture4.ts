// import express from "express";
const express = require("express");
// if you want to get rid of require and want to use import
// then add "type": "module", in package.json
// const app = express();

// app.use((res, req, next) => {
//   console.log("middleware start here1");
//   next();
// });

// app.use((res, req, next) => {
//   console.log("Another middleware here2");
// });

// app.get("/", (req, res) => {
//   res.send("chapion One");
// });

// app.get("/profile", (req, res) => {
//   res.send("champ on profile");
// });

// app.listen(3000);

const app = express();

app.use((req, res, next) => {
  console.log("middleware 001");
  next();
});

app.listen((res, req, next) => {
  console.log("middleware 02");
  next();
});

app.get("/", (req, res) => {
  res.send("new try!");
});

app.get("/profile", (req, res) => {
  res.send("Profile");
});

app.listen(3000);
