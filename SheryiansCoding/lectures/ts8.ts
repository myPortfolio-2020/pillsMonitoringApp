var express = require("express");
var path = require("path");
var fs = require("fs");
// import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, allfiles) => {
    res.render("index.ejs", { files: allfiles });
  });
});

app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, fileData) => {
    console.log(fileData);
    res.render("show", { filename: req.params.filename, fileData: fileData });
  });
});

app.post("/create", (req, res) => {
  console.log(req.body);
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      res.redirect("/");
    }
  );
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
