const express = require("express");
const path = require("path");
const userModel = require("./models/user");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// setup a middleware

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send("you can access profile");
});

app.post("/register", async (req, res) => {
  let { name, email, password, userName, age } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send("User already exist");

  bcrypt.genSalt(10, (err, salt) => {
    // console.log("salt", salt);
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        email,
        userName,
        age,
        password: hash,
      });
      let token = jwt.sign({ email: email, userid: user._id }, "secretKey");
      res.cookie("token", token);
      res.send("registered");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "secretKey");
      res.cookie("token", token);
      res.status(200).send("you can Login");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.send("you must be login");
  else {
    let data = jwt.verify(req.cookies.token, "secretKey");
    req.user = data;
  }
  next();
}

app.listen(3000, () => {
  console.log("Running!!!");
});
