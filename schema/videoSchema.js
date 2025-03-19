import mongoose from 'mongoose'

const videoschema =new mongoose.Schema({
    filename: String,
    filepath: String,
    path: String,
    thumbnail: String,
    contentType: String,
    title: String,
    description: String,
    category: String,
    userId: String
})

const Video = mongoose.model('video', videoschema)

export default Video;