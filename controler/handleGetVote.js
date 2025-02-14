const Vote = require("../schema/voteSchema.js")

const handleGetVote =async (req, res) => {
  try{
    const data = await Vote.find()
     res.send(data)
  }catch (err){
    console.log(err)

  }
};

module.exports = handleGetVote;
