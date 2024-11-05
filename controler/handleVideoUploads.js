import fs from "fs"
import User from "../schema/userSchema.js"
import cloudinary from 'cloudinary'


const uploadVideo = async(req, res) => {

  const result = await cloudinary.v2.uploader.upload(req.file.path, {
    resource_type: 'video',
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
  fs.unlinkSync(req.file.path)
res.send(user)
};

export default uploadVideo;
