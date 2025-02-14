const User = require("../schema/userSchema.js")

const handleBioUpdate = async(req, res) => {
  const { bio, state, dob, highschool } = req.body;
try{
  const data = await User.findByIdAndUpdate(req.params.id, { bio, state, dob, highschool })
   res.send(data)
}catch (err){
      console.log(err);
      res.sendStatus(400)
    }
};

module.exports = handleBioUpdate;
