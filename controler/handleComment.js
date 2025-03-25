import Comment from "../schema/comment.js"

const handleComment = async(req, res) => {
  const { comment, userId, commenterId, videoId } = req.body;
try{
  const newComment = await Comment.create({
    comment,
    userId,
    commenterId,
    under: "root",
    videoId
  });
  res.send(newComment)
}catch (err){
  console.log(err);
  res.sendStatus(400)
}
};

export default handleComment;
