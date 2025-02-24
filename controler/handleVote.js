import Vote from "../schema/voteSchema.js"

const handleVote = async (req, res) => {
  const { userName, videoTitle, userId, videoName, voterId, votes } = req.body;
  try {
      const newVote = await Vote.create({
        userName,
        videoTitle,
        userId,
        voterId,
        videoName,
        votes,
      });
      res.send(newVote);
  } catch (err) {
    console.log(err);
  }
};

export default handleVote;
