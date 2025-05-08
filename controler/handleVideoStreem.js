import fs from "fs"

const handleVideoStreem = async (req, res) => {
  try {
    const { filename } = req.params;
    const videoUrl = `videos/${filename}`;

    const videoStream = fs.readFileSync(videoUrl)
    res.send(videoStream)
    
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

export default handleVideoStreem;
