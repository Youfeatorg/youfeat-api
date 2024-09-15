import Vote from "../schema/voteSchema.js"

const handleVote = async(req, res) => {
  const { userName, videoTitle, userId, videoName, voterId } = req.body;
try{
  const foundVote = await Vote.findOne({voterId})
  if(foundVote) {
    return res.sendStatus(207)
  }

  const newVote = await Vote.create({
    userName,
    videoTitle,
    userId,
    voterId,
    videoName,
  });

  res.send(newVote)
}catch (err){
  console.log(err);
  
}
};

export default handleVote;
