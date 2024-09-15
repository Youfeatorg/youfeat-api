/** @format */

import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  date: String,
});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
