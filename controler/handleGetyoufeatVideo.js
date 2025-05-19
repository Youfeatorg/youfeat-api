import Video from "../schema/videoSchema.js";

const handleGetYoufeatVideo = async (req, res) => {
  try {
    const videos = await Video.find();
    res.send(videos.sort(() => Math.random() - 0.5));
  } catch (err) {
    console.log(err);
  }
};

export default handleGetYoufeatVideo;
