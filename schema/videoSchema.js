import mongoose from 'mongoose'

const videoschema =new mongoose.Schema({
    video: String,
    title: String,
    description: String,
    published: Boolean,
    thumbnail: String,
})

const Video = mongoose.model('video', videoschema)

export default Video;