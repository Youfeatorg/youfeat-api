/** @format */

const Notification = require("../schema/notificationSchema.js")

const handleGetNotification = async (req, res) => {
  const user = req.user
  try {
    const data = await Notification.find({to:user._id,to:"everyOne"});
    res.send(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = handleGetNotification;
