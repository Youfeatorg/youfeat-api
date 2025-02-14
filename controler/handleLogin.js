const jwt = require("jsonwebtoken");
const User = require("../schema/userSchema.js");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(402);

  const foundUser = await User.findOne({ email });
  if (!foundUser) return res.sendStatus(401);

  const isPassword = bcrypt.compare(password, foundUser.password);
  if (!isPassword) {
    return res.status(401).send({ msg: "ivalid password/school name" });
  }

  try {
    const accesstoken = jwt.sign(
      { email: foundUser.email },
      process.env.JWT_SECRETE,
      { expiresIn: "15d" }
    );

    const i = await User.findOneAndUpdate(
      { email: foundUser.email },
      { accesstoken }
    );
    res.json({ accesstoken });
  } catch (err) {
    if (err) return res.sendStatus(400);
  }
};

module.exports = handleLogin;
