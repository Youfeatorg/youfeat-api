import fs from "fs"
import User from "../schema/userSchema.js"
import cloudinary from 'cloudinary'


const uploadVideo = async(req, res) => {

  const result = await cloudinary.v2.uploader.upload(req.file.path, {
    folder: "/youfeat/",
    use_filename: true,
  });

 const user =await User.findByIdAndUpdate(req.body.userId, {
    video: {
      filename: result.url,
      contentType: req.file.mimetype,
      title: req.body.title,
      catigory: req.body.catigory,
      description: req.body.description,
    },
  })
res.send(user)
  fs.unlinkSync(req.file.path)
};

export default uploadVideo;
