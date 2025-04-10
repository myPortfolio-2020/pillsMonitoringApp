var express = require("express");
var path = require("path");
// import express from "express";
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("index.ejs");
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
