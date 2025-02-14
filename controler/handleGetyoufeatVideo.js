const Video = require("../schema/videoSchema.js");

const handleGetYoufeatVideo =async (req, res)=>{
    try{
    const videos = await Video.find({published: true})
    res.send(videos)
    }catch (err){
        console.log(err);
        
    }
}

module.exports = handleGetYoufeatVideo