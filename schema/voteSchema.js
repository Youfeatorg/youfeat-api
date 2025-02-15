import mongoose from "mongoose"

const voteSchema = new mongoose.Schema({
  userName:  String,
  videoTitle: String,
  userId: String,
  voterId:  String,
  votes: Number,
});

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;
