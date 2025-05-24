const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

const userModel = require("./models/userModel");

app.get("/", (req, res) => {
  res.render("index");
});

app.post('/register', async(req, res)=>{
  const {  name,userName, email, age, password} = req.body
  let user = await userModel.findOne({email})
  if(user) return res.status(500).send('user Already Exist')
 })

app.listen(3000, () => {
  console.log("Running");
});
