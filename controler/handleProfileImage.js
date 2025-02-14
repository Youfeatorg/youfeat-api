const fs = require("fs")
const User = require("../schema/userSchema.js")
const cloudinary = require('cloudinary')

const handleProfileImage = async (req, res) => {
const { userid } = req.params;

try{
const result = await cloudinary.v2.uploader.upload(req.file.path, {
  folder: "/teacherManagment/",
  use_filename: true,
});
  const data = await User.findByIdAndUpdate(userid, { profileImage: result.secure_url })
    fs.unlinkSync(req.file.path)
     res.send(data)
}catch (err){
  console.log(err);
  
}
};

module.exports = handleProfileImage;
