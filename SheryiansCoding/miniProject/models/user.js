var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rababportfolio2020:rabab14<>@rabab.xwpa1.mongodb.net/");
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    userName: String,
    age: Number,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});
module.exports = mongoose.model("user", userSchema);
