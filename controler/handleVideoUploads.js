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
            if (!error) {
              const videoUrl = body.player_embed_url;
              const user = await User.findByIdAndUpdate(req.body.userId, {
                video: {
                  filename: req.file.filename,
                  filepath: videoUrl,
                  thumbnail: body.pictures.sizes[6].link_with_play_button,
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

              setTimeout(() => {
                vimeo.request(
                  {
                    method: "GET",
                    path: url,
                  },
                  async (error, bd) => {
                    if (!error) {
                      const user = await User.findByIdAndUpdate(
                        req.body.userId,
                        {
                          video: {
                            ...user.video,
                            thumbnail:
                              bd.pictures.sizes[6].link_with_play_button,
                          },
                        }
                      );
                    }
                  }
                );
              }, 10000);
              res.send(user);
            }
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
