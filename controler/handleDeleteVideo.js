import User from "../schema/userSchema.js";
import Video from "../schema/videoSchema.js";

const handleDeleteVideo = async (req, res) => {
  const { user } = req;
  console.log(user);
  try {
    const i = await User.findOneAndUpdate(
      { email: user.email },
      { video: null }
    );

    await Video.findOneAndDelete({ video: user.video.filename });
    res.send(i);
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteVideo;
