import Comment from "../schema/comment.js"

const handleGetComment =async (req, res) => {
  try{
  const data =await Comment.find()
     res.send(data)
  }catch (err){
    console.log(err);
    res.sendStatus(400)
  }
};

export default handleGetComment;
