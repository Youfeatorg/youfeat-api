/** @format */

const express = require("express");
const handleRegister = require("../controler/handleRegister.js");
const handleLogin = require("../controler/handleLogin.js");
const upload = require("../midlewear/upload.js");
const handleLogout = require("../controler/handleLogout.js");
const handleGetUser = require("../controler/handleGetUser.js");
const handleProfileImage = require("../controler/handleProfileImage.js");
const uploadImage = require("../midlewear/uploadImage.js");
const handleGetAllUsers = require("../controler/handleGetAllUsers.js");
const handleBioUpdate = require("../controler/handleUpdateBio.js");
const handleVote = require("../controler/handleVote.js");
const handleGetVote = require("../controler/handleGetVote.js");
const handleNotification = require("../controler/handleNotification.js");
const handleGetNotification = require("../controler/handleGetNotification.js");
const handleComment = require("../controler/handleComment.js");
const handleGetComment = require("../controler/handleGetComment.js");
const handleVerifyEmail = require("../controler/VerifyAccount.js");
const handleCheckEmail = require("../controler/handleCheckEmail.js");
const handleChangePassword = require("../controler/handleChangePassword.js");
const authMiddleware = require("../midlewear/authMiddleware.js");
const uploadYoufeatVideo = require("../controler/handleYoufeatVideoUpload.js");
const uploadVideo = require("../controler/handleVideoUploads.js");
const handleGetYoufeatVideo = require("../controler/handleGetyoufeatVideo.js");
const handleDeleteVideo = require("../controler/handleDeleteVideo.js");
const handleVideoStreem = require("../controler/handleVideoStreem.js")
const handleResendEmail = require("../controler/handleResendMessage.js");

const route = express.Router();

route.post("/signup", handleRegister);

route.post("/youfeat/videouploads", upload, uploadYoufeatVideo);

route.get("/youfeat/videos", handleGetYoufeatVideo);

route.get("/video/delete", authMiddleware, handleDeleteVideo);

route.post("/videouploads",  upload, uploadVideo);

route.get("/video/:filename", handleVideoStreem)

route.post("/setpassword", handleChangePassword);

route.post("/logout", authMiddleware, handleLogout);

route.post("/checkemail", handleCheckEmail);

route.post("/resend/email", handleResendEmail)

route.post("/verifyemail", handleVerifyEmail);

route.get("/user", authMiddleware, handleGetUser);

route.post("/users", handleGetAllUsers);

route.post("/vote", handleVote);

route.post("/comment", handleComment);

route.post("/allcomment", handleGetComment);

route.post("/notify", handleNotification);

route.post("/notification", authMiddleware, handleGetNotification);

route.post("/allvote", handleGetVote);

route.post("/profile/:userid", uploadImage, handleProfileImage);

route.post("/bio/:id", handleBioUpdate);

route.post("/login", handleLogin);

module.exports = route;
