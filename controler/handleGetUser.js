import User from "../schema/userSchema.js"

/*const del =async ()=>{
  const i = await User.findOneAndUpdate({email: 'ngbedejames415@gmail.com'}, {verified: true})
  console.log(i);
}

del()*/
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
