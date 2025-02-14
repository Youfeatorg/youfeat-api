const Comment = require("../schema/comment.js")

const handleComment = async(req, res) => {
  const { comment, userId, commenterId } = req.body;
try{
  const newComment = await Comment.create({
    comment,
    userId,
    commenterId,
    under: "root",
  });
  res.send(newComment)
}catch (err){
  console.log(err);
  res.sendStatus(400)
}
};

module.exports = handleComment;
