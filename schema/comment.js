/** @format */

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  comment: String,
  userId: String,
  commenterId: String,
  under: String,
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
