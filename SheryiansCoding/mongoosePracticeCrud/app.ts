const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const userModel = require("./models/users");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  const allUers = await userModel.find();
  res.render("read", { users: allUers });
});

app.post("/create", async (req, res) => {
  let { ename, email, image } = req.body;
  const userCreated = await userModel.create({
    ename,
    email,
    image,
  });
  //   res.send(userCreated);
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  const deleteUser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.get("/editUser/:userid", async (req, res) => {
  const editUser = await userModel.findOne({ _id: req.params.userid });
  res.render("editUser", { editUser });
});

app.post("/update/:userid", async (req, res) => {
  const { ename, email, image } = req.body;
  const editUser = await userModel.findOneAndUpdate(
    { _id: req.params.userid },
    { ename, email, image },
    { new: true }
  );
  res.redirect("/read");
});

app.listen(3000, () => {
  console.log("working");
});
