import fs from "fs"
import { google } from 'googleapis'
import User from "../schema/userSchema.js"
import { OAuth2Client } from 'google-auth-library'
import readline from 'readline'
import credentials from '../client_secret_620244021144-4sqgj7pe733vmmj7isaeg2d3ansg8ajm.apps.googleusercontent.com.json'

// Function to upload video using multer and mongoose
const uploadVideo = async(req, res) => {

  const result = await cloudinary.v2.uploader.upload(req.file.path, {
    folder: "/teacherManagment/",
    use_filename: true,
  });

  User.findByIdAndUpdate(req.body.userId, {
    video: {
      filename: result.url,
      contentType: req.file.mimetype,
      title: req.body.title,
      catigory: req.body.catigory,
      description: req.body.description,
    },
  })
  
};

export default uploadVideo;
