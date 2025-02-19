import User  from "../schema/userSchema.js"

const handleGetAllUsers = async (req, res) => {
  try{
  const user = await User.find()
  const i = user.sort(() => Math.random() - 0.5)
  res.send(i)
  }catch (err){
    console.log(err);
    res.sendStatus(400)
  }
};

export default handleGetAllUsers;
