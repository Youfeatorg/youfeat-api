import Vote from "../schema/voteSchema.js";

const handleVote = async (req, res) => {
  const { userName, videoTitle, userId, videoName, voterId, votes } = req.body;
  try {
    const foundVote = await Vote.findOne({ voterId });

    if (foundVote) {
      const vote = await Vote.findByIdAndUpdate(foundVote._id, {
        votes: Number(foundVote.votes) + Number(votes),
      });
      res.send(vote)
    } else {
      const newVote = await Vote.create({
        userName,
        videoTitle,
        userId,
        voterId,
        videoName,
        votes,
      });
      res.send(newVote);
    }
  } catch (err) {
    console.log(err);
  }
};
/*const del =async()=>{
 const x = await Vote.find()
 for(let i =0; i < x.length; i++){
  const k = await Vote.findByIdAndDelete(x[i]._id)
  console.log(k);
  
 }
}
del()*/

export default handleVote;
