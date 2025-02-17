import fs from "fs";
import User from "../schema/userSchema.js";
import Video from "../schema/videoSchema.js";
import vimeo from "../Credentials/Vimeo.js";

const uploadVideo = async (req, res) => {
  try {
    vimeo.upload(
      req.file.path,
      {
        name: req.body.title,
        description: req.body.description,
      },
      async (url) => {
        vimeo.request({ method: "GET", path: url }, async (err, body) => {
          if (!err) {
            const user = await User.findByIdAndUpdate(req.body.userId, {
              video: {
                filename: req.file.filename,
                filepath: body.player_embed_url,
                path: url,
                thumbnail: body.pictures.sizes[body.pictures.sizes.length - 1].link_with_play_button,
                contentType: req.file.mimetype,
                title: req.body.title,
                catigory: req.body.catigory,
                description: req.body.description,
              },
            });
            const i = await Video.create({
              video: body.player_embed_url,
              title: req.body.title,
              description: req.body.description,
              published: false,
            });
            return res.send({
              ...user,
              video: {
                filename: req.file.filename,
                filepath: videoUrl,
                thumbnail: body.pictures.sizes[body.pictures.sizes.length - 1].link_with_play_button,
                contentType: req.file.mimetype,
                title: req.body.title,
                catigory: req.body.catigory,
                description: req.body.description,
              },
              path: url
            });
          } else {
            res.sendStatus(400);
          }
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default uploadVideo;
