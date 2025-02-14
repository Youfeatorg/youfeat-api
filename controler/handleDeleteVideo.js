const User = require("../schema/userSchema.js");
const Video = require("../schema/videoSchema.js");

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

module.exports = handleDeleteVideo;
