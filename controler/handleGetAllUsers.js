const User = require("../schema/userSchema.js")

const handleGetAllUsers = async (req, res) => {
  try{
  const user = await User.find()
  res.send(user)
  }catch (err){
    console.log(err);
    res.sendStatus(400)
  }
};

module.exports = handleGetAllUsers;
