/** @format */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  password: String,
  salt: String,
  accesstoken: String,
  profileImage: String,
  state: String,
  bio: String,
  catigory: String,
  video: Object,
  highschool: String,
  dob: Date,
  role: Number,
  code: Number,
  contestant: Boolean,
  verified: Boolean,
});

const User = mongoose.model("User", userSchema);

export default User;
