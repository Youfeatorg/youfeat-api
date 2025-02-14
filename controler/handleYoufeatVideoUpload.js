const fs = require("fs")
const Video = require("../schema/videoSchema.js")
const cloudinary = require('cloudinary')

const uploadYoufeatVideo = async(req, res) => {
try{
  /*const result = await cloudinary.v2.uploader.upload(req.file.path, {
    resource_type: 'video',
    folder: "/teacherManagment/",
    use_filename: true,
  });*/
  const i =await Video.create({
        video: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        published: true
  })
  res.send(i)
}
catch (err){
  console.log(err);
  res.sendStatus(500)
}
};

module.exports = uploadYoufeatVideo;
