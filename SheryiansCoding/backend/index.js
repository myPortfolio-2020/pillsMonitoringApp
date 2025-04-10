var express = require("express");
// import express from "express";
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/:harsh", function (req, res) {
    res.send("Hello World!");
});
app.listen(3000, function () {
    console.log("is it running?");
});
