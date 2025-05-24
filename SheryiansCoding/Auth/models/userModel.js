var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rababportfolio2020:rabab14<>@rabab.xwpa1.mongodb.net/"
);
var userSchema = mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  age: Number,
  password: String,
});
module.exports = mongoose.model("user", userSchema);
