import Vote from "../schema/voteSchema.js"

const handleGetVote =async (req, res) => {
  try{
    const data = await Vote.find()
     res.send(data)
  }catch (err){
    console.log(err)

  }
};

export default handleGetVote;
