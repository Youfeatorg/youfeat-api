import fs from "fs";
import User from "../schema/userSchema.js";
import cloudinary from "cloudinary";
import ffmpeg from "fluent-ffmpeg";
import Video from "../schema/videoSchema.js";

const uploadVideo = async (req, res) => {

  /*const result = await cloudinary.v2.uploader.upload(req.file.path, {
    resource_type: "video",
    folder: "/youfeat/",
    use_filename: true,
  });*/

  const user = await User.findByIdAndUpdate(req.body.userId, {
    video: {
      filename: req.file.filename,
      contentType: req.file.mimetype,
      title: req.body.title,
      catigory: req.body.catigory,
      description: req.body.description,
    },
  });
  const i = await Video.create({
    video: req.file.filename,
    title: req.body.title,
    description: req.body.description,
    published: false,
  });
  res.send(user)
};

export default uploadVideo;
