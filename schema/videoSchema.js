const mongoose = require('mongoose')

const videoschema =new mongoose.Schema({
    video: String,
    title: String,
    description: String,
    published: Boolean
})

const Video = mongoose.model('video', videoschema)

module.exports = Video;