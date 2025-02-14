/** @format */

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: String,
  userId: String,
  commenterId: String,
  under: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
