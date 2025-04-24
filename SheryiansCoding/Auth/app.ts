const express = require("express");
const bcrypt = require('bcrypt')
// const cookieParser = require("cookie-parser");

const app = express();

// app.use(cookieParser());

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('rabab14<>', salt, function(err, hash) {
        console.log(hash)
    });
});
});

app.get("/read", (req, res) => {
  res.send("readPage");
});

// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("readPage");
// });

app.listen(3000, () => {
  console.log("jwt");
});
