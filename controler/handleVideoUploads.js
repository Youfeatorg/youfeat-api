import fs from "fs";
import User from "../schema/userSchema.js";
import cloudinary from "cloudinary";
import Video from "../schema/videoSchema.js";
import vimeo from "../Credentials/Vimeo.js";

const uploadVideo = async (req, res) => {
  /*const result = await cloudinary.v2.uploader.upload(req.file.path, {
    resource_type: "video",
    folder: "/youfeat/",
    use_filename: true,
  });*/
  try {
    vimeo.upload(
      req.file.path,
      { name: req.body.title, description: req.body.description },
      (url) => {
        vimeo.request(
          {
            method: "GET",
            path: url,
          },
          async (error, body) => {
            console.log(body)
            const videoUrl = body.files.find((file)=> file.quality === 'hd').link
            const user = await User.findByIdAndUpdate(req.body.userId, {
              video: {
                filename: req.file.filename,
                filepath: videoUrl,
                contentType: req.file.mimetype,
                title: req.body.title,
                catigory: req.body.catigory,
                description: req.body.description,
              },
            });
            const i = await Video.create({
              video: videoUrl,
              title: req.body.title,
              description: req.body.description,
              published: false,
            });
            res.send(user);
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default uploadVideo;
