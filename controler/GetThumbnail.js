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
  
const GetThumbnail = async (req, res) => {
  const { id } = req.params;
  const { path } = req.body;

  const uservideo = await User.findById(id);
  vimeo.request({ method: "GET", path }, async (err, body) => {
    if (!err) {
        setTimeout(async()=>{
    const user = await User.findByIdAndUpdate(id, {
      video: {
        ...uservideo.video,
        thumbnail:
          body.pictures.sizes[body.pictures.sizes.length - 1]
            .link_with_play_button,
      },
    });
    res.sendStatus(200);
}, 10000)
    }
  });
};

export default GetThumbnail;
