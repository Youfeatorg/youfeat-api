import vimeo from "../Credentials/Vimeo.js";
import User from "../schema/userSchema.js";

const handleGetUser = async (req, res) => {
  const user = req.user;
  try {
    if (user.video) {
      vimeo.request(
        {
          method: "GET",
          path: user.video.path,
        },
        async (err, body) => {
          if (!err) {
            await User.findByIdAndUpdate(user._id, {
              video: {
                ...user.video,
                thumbnail:
                  body.pictures.sizes[body.pictures.sizes.length - 1]
                    .link_with_play_button,
              },
            });
          }
        }
      );
    }
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export default handleGetUser;
