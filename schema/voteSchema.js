import mongoose from "mongoose"

const voteSchema = new mongoose.Schema({
  userName:  String,
  videoTitle: String,
  userId: String,
  voterId:  String,
});

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;
