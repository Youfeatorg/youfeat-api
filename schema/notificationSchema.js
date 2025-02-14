/** @format */

const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  date: String,
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
