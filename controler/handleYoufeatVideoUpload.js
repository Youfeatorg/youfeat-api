import fs from "fs"
import Video from "../schema/videoSchema.js"
import cloudinary from 'cloudinary'

const uploadYoufeatVideo = async(req, res) => {
try{
  const result = await cloudinary.v2.uploader.upload(req.file.path, {
    resource_type: 'video',
    folder: "/teacherManagment/",
    use_filename: true,
  });
  const i =await Video.create({
        video: result.secure_url,
        title: req.body.title,
        description: req.body.description,
        published: true
  })
  fs.unlinkSync(req.file.path)
  res.send(i)
}
catch (err){
  console.log(err);
  
}
};

export default uploadYoufeatVideo;
