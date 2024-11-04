import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerified: boolean;
  verifyExpiry: Date;
  isAcceptingMess: boolean;
  messages: Message[];
}

const userSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "verifyCode is required"],
  },
  verifyExpiry: {
    type: Date,
    required: [true, "verifyCode is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMess: {
    type: Boolean,
    default: false,
  },
  messages: [messageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("user", userSchema);

export default UserModel;
