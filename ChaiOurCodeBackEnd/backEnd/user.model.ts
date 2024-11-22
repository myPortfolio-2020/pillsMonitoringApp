import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
  },
});

export const User = mongoose.model("User", userSchema);
