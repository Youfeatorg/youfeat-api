/** @format */

import express from "express";
import handleRegister from "../controler/handleRegister.js";
import handleLogin from "../controler/handleLogin.js";
import upload from "../midlewear/upload.js";
import handleLogout from "../controler/handleLogout.js";
import handleGetUser from "../controler/handleGetUser.js";
import handleProfileImage from "../controler/handleProfileImage.js";
import uploadImage from "../midlewear/uploadImage.js";
import handleGetAllUsers from "../controler/handleGetAllUsers.js";
import handleBioUpdate from "../controler/handleUpdateBio.js";
import handleVote from "../controler/handleVote.js";
import handleGetVote from "../controler/handleGetVote.js";
import handleNotification from "../controler/handleNotification.js";
import handleGetNotification from "../controler/handleGetNotification.js";
import handleComment from "../controler/handleComment.js";
import handleGetComment from "../controler/handleGetComment.js";
import handleVerifyEmail from "../controler/VerifyAccount.js";
import handleCheckEmail from "../controler/handleCheckEmail.js";
import handleChangePassword from "../controler/handleChangePassword.js";
import authMiddleware from "../midlewear/authMiddleware.js";
import uploadYoufeatVideo from "../controler/handleYoufeatVideoUpload.js";
import uploadVideo from "../controler/handleVideoUploads.js";
import handleGetYoufeatVideo from "../controler/handleGetyoufeatVideo.js";
import handleDeleteVideo from "../controler/handleDeleteVideo.js";

const route = express.Router();

route.post("/signup", handleRegister);

route.post("/youfeat/videouploads", upload, uploadYoufeatVideo);

route.get("/youfeat/videos", handleGetYoufeatVideo);

route.get("/video/delete", authMiddleware, handleDeleteVideo);

route.post("/videouploads",  upload, uploadVideo);

route.post("/setpassword", handleChangePassword);

route.post("/logout", authMiddleware, handleLogout);

route.post("/checkemail", handleCheckEmail);

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

export default route;
