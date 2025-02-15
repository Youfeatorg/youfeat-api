import User from "../schema/userSchema.js"

const handleLogout = (req, res) => {
   const user = req.user
   const i = User.findOneAndUpdate({_id: user._id}, {accesstoken: ''})
   res.sendStatus(200)
};

export default handleLogout;
