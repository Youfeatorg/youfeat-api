/** @format */

import User from "../schema/userSchema.js"

const handleCheckEmail = (req, res) => {
  const { email, code } = req.body;
  const user = User.findOne({ email });
  if (!user) return res.sendStatus(401);

  User.findOneAndUpdate({ email }, { code: code }).then((data) => {
    res.json({ code, fullName: data.fullName, email: data.email });
  });
};
export default handleCheckEmail;
