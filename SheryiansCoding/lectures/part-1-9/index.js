var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    fs.readdir("./files", function (err, files) {
        res.render("index", { file: files });
    });
});
app.post("/create", function (req, res) {
    fs.writeFile("./files/".concat(req.body.title.split(" ").join(""), ".txt"), req.body.detail, function (err) {
        res.redirect("/");
    });
});
app.get("/files/:filename", function (req, res) {
    fs.readFile("./files/".concat(req.params.filename), "UTF-8", function (err, filedata) {
        res.render("show", { filename: req.params.filename, filedata: filedata });
    });
});
app.get("/edit/:filename", function (req, res) {
    res.render("edit", { filename: req.params.filename });
});
app.post("/edit", function (req, res) {
    fs.rename("./files/".concat(req.body.Previous), "./files/".concat(req.body.newNm), function (err) {
        res.redirect("/");
    });
});
app.get("/profile/:username/:company", function (req, res) {
    res.send("Welcome, ".concat(req.params.username, " from ").concat(req.params.company));
});
app.listen(3000, function (err) {
    console.log("Running");
});
