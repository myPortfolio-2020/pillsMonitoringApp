var express = require("express");
var path = require("path");
var fs = require("fs");
// import express from "express";
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    fs.readdir("./files", function (err, allfiles) {
        res.render("index.ejs", { files: allfiles });
    });
});
app.get("/files/:filename", function (req, res) {
    fs.readFile("./files/".concat(req.params.filename), "utf-8", function (err, fileData) {
        console.log(fileData);
        res.render("show", { filename: req.params.filename, fileData: fileData });
    });
});
app.post("/create", function (req, res) {
    console.log(req.body);
    fs.writeFile("./files/".concat(req.body.title.split(" ").join(""), ".txt"), req.body.details, function (err) {
        res.redirect("/");
    });
});
app.get("/profile/:username", function (req, res) {
    res.send("welcome ".concat(req.params.username));
});
app.get("/author/:userNm/:age", function (req, res) {
    //   res.send(req.params);
    res.send("welcome, ".concat(req.params.userNm, " - I know your age is ").concat(req.params.age));
});
app.listen(3000, function () {
    console.log("is it running?");
});
