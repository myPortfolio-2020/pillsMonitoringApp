const express = require("express");

const app = express();

const user = require("./userModel");

app.get("/", (req, res) => {
  res.send("nice");
});

app.get("/create", async (req, res) => {
  const userCreated = await user.create({
    name: "Jamal",
    userName: "kamal",
    email: "myEmail@ex.com",
  });
  res.send(userCreated);
});

app.get("/update", async (req, res) => {
  const updatedUser = await user.findOneAndUpdate(
    { userName: "Imman" },
    { name: "Rabab007" },
    { new: true }
  );

  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  const readUsers = await user.find(); // find all
  //   const readUsers = await user.findOne({name:'Jamal'}); // find One
  res.send(readUsers);
});

app.get("/delete", async (req, res) => {
  //   const deleteUser = await user.findOneAndDelete({ name: "Jamal" });
  const deleteUser = await user.find({ name: "Jamal" });
  res.send(deleteUser);
});
app.listen(3000, () => {
  console.log("no error");
});
