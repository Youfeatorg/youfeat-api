const fs = require("fs")
const ytdl = require('ytdl-core')

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

module.exports = handleVideoStreem;
