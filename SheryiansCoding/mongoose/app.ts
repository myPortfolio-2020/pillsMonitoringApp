const express = require("express");

const app = express();

const user = require("./userModel");

app.get("/", (req, res) => {
  res.send("nice");
});

app.get("/create", async (req, res) => {
  const userCreated = await user.create({
    name: "rabab",
    userName: "Imman",
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

app.listen(3000, () => {
  console.log("no error");
});
