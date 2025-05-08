import vimeo from "../Credentials/Vimeo.js";
import User from "../schema/userSchema.js";

const del = async() => {
  /*vimeo.request(
    { method: "GET", path: "/videos/1057634991" },
    async (err, body) => {
      console.log(
        body.pictures.sizes[body.pictures.sizes.length - 1]
          .link_with_play_button
      );
    }
  );*/
}
let i = "/videos/1057634991"


  
const GetThumbnail = async (req, res) => {

    const user = await User.findById(req.params.id)
        const maxAttempts = 10;
        const delay = 10000; // 10 seconds
      
        for (let i = 0; i < maxAttempts; i++) {
          const thumbnailUrl = getThumbnailUrl(req.body.path.split('/')[2], '1280x720');
          const isThumbnailReady = await checkThumbnailExists(thumbnailUrl);
      
          if (isThumbnailReady) {
            await User.findByIdAndUpdate(req.params.id, {video: {...user.video, thumbnail: thumbnailUrl }});
            res.sendStatus(200)
          }
      
          console.log('Thumbnail not ready yet. Retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      
        throw new Error('Thumbnail not available after multiple attempts.');
      
      async function checkThumbnailExists(url) {
        try {
          const response = await fetch(url, { method: 'HEAD' });
          return response.ok;
        } catch (error) {
          return false;
        }
      }
};

export default GetThumbnail;
