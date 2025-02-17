import fs from "fs"
import Video from "../schema/videoSchema.js"
import cloudinary from 'cloudinary'
import vimeo from "../Credentials/Vimeo.js";

const uploadYoufeatVideo = async(req, res) => {
try{
  /*const result = await cloudinary.v2.uploader.upload(req.file.path, {
    resource_type: 'video',
    folder: "/teacherManagment/",
    use_filename: true,
  });*/

  vimeo.upload(req.file.path, async(url)=>{
    vimeo.request({
      method: "GET",
      path: url
    }, async(err, body)=>{
      const videoUrl = body.files.find((file)=> file.quality === 'hd').link
      const i =await Video.create({
        video: videoUrl,
        thumbnail: body.pictures.base_link,
        title: req.body.title,
        description: req.body.description,
        published: true
  })
  res.send(i)
    })
})
}

catch (err){
  console.log(err);
  res.sendStatus(500)
}
};

export default uploadYoufeatVideo;
