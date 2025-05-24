const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content:String,
  likes: [
    {
        type: mongoose.schema.Types.ObjectId,
        ref:'user'
    }
  ]
});

module.exports = mongoose.model("posts", postSchema);
