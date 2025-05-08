import Vote from "../schema/voteSchema.js";

const handleVote = async (req, res) => {
  const { metadata } = req.body.data;
  try {
    if (req.body.data.status === "success") {
      const newVote = await Vote.create(metadata);
      res.send(newVote);
    }
  } catch (err) {
    console.log(err);
  }
};

export default handleVote;
