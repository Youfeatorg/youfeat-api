import vimeo from "../Credentials/Vimeo.js"
import User from "../schema/userSchema.js"

const GetThumbnail =async (req, res)=> {
    const { id } = req.params
    const {path} = req.body

    const uservideo = await User.findById(id)
    vimeo.request({ method: "GET", path }, async (err, body) => {
        const user = await User.findByIdAndUpdate(id, {
            video: {
                ...uservideo.video, thumbnail: body.pictures.sizes[body.pictures.sizes.lenght - 1].link_with_play_button
            }
        })
        res.sendStatus(200)
    })
}

export default GetThumbnail