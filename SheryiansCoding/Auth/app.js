var express = require("express");
var bcrypt = require('bcrypt');
// const cookieParser = require("cookie-parser");
var app = express();
// app.use(cookieParser());
app.get("/", function (req, res) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash('rabab14<>', salt, function (err, hash) {
            console.log(hash);
        });
    });
});
app.get("/read", function (req, res) {
    res.send("readPage");
});
// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("readPage");
// });
app.listen(3000, function () {
    console.log("jwt");
});
