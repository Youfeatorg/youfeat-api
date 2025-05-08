import vimeo from "../Credentials/Vimeo.js";
import Video from "../schema/videoSchema.js";

const handleGetUser = async (req, res) => {
  const user = req.user;
  try {
    const userVideos = await Video.find({ userId: user._id });
    userVideos.forEach((v) => {
      vimeo.request(
        {
          method: "GET",
          path: v.path,
        },
        async (err, body) => {
          if (!err) {
            await Video.findByIdAndUpdate(v._id, {
              thumbnail:
                body.pictures.sizes[body.pictures.sizes.length - 1]
                  .link_with_play_button,
            });
          }
        }
      );
    });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export default handleGetUser;
