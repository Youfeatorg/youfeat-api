import User from "../schema/userSchema.js"

const handleGetUser = async (req, res) => {
  const user = req.user
  try{
      res.json(user)
  }catch (err){
    console.log(err);
    res.sendStatus(400);
    }

};

export default handleGetUser;
