const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { file: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.detail,
    (err) => {
      res.redirect("/");
    }
  );
});

app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "UTF-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.Previous}`,
    `./files/${req.body.newNm}`,
    (err) => {
      res.redirect("/");
    }
  );
});

app.get("/profile/:username/:company", (req, res) => {
  res.send(`Welcome, ${req.params.username} from ${req.params.company}`);
});

app.listen(3000, (err) => {
  console.log("Running");
});
