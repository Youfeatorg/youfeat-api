import fs from "fs";
import User from "../schema/userSchema.js";
import cloudinary from "cloudinary";
import ffmpeg from "fluent-ffmpeg";
import Video from "../schema/videoSchema.js";
import bucket from "../Credentials/GoogleBucket.js";

const uploadVideo = async (req, res) => {
  /*const result = await cloudinary.v2.uploader.upload(req.file.path, {
    resource_type: "video",
    folder: "/youfeat/",
    use_filename: true,
  });*/

  const blob = bucket.file(
    req.file.originalname + Date.now() + "-" + Math.round(Math.random() * 1e9)
  );
  const blobStream = blob.createWriteStream();
  blobStream.on("error", (e) => {
    console.log(e);
    res.sendStatus(500);
  });

  blobStream.on("finish", async (e) => {
    const user = await User.findByIdAndUpdate(req.body.userId, {
      video: {
        filename: req.file.filename,
        filepath: `https://storage.googleapis.com/youfea-tvideo_bucketcom/${blob.name}`,
        contentType: req.file.mimetype,
        title: req.body.title,
        catigory: req.body.catigory,
        description: req.body.description,
      },
    });
    const i = await Video.create({
      video:  `https://storage.googleapis.com/youfea-tvideo_bucketcom/${blob.name}`,
      title: req.body.title,
      description: req.body.description,
      published: false,
    });
  });
  blobStream.end(req.file.buffer);

  res.sendStatus(200);
};

export default uploadVideo;
