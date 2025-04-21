const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://rababportfolio2020:rabab14<>@rabab.xwpa1.mongodb.net/`
);

const userSchema = mongoose.Schema({
  ename: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
