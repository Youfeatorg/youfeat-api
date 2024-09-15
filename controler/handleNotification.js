import Notification from "../schema/notificationSchema.js"

const handleNotification = async(req, res) => {
  const { from, to, message, date } = req.body;
try{
  const newNotification =await Notification.create({
    from,
    to,
    message,
    date,
  });
  res.send(newNotification)
}catch (err){
  console.log(err);
  res.sendStatus(400)
}
};

export default handleNotification;
