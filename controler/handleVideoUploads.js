import fs from "fs";
import User from "../schema/userSchema.js";
import Video from "../schema/videoSchema.js";
import vimeo from "../Credentials/Vimeo.js";
import agenda from "../agenda.js";

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
            const i = await Video.create({
              userId: req.user._id,
              filename: req.file.filename,
                filepath: body.player_embed_url,
                path: url,
                thumbnail: body.pictures.sizes[body.pictures.sizes.length - 1].link_with_play_button,
                contentType: req.file.mimetype,
                title: req.body.title,
                category: req.user.catigory,
                description: req.body.description,
            });
            return res.send(i);
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
