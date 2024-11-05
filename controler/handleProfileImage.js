import fs from "fs"
import User from "../schema/userSchema.js"
import cloudinary from 'cloudinary'

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

export default handleProfileImage;
