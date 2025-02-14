const jwt = require("jsonwebtoken");
const User = require("../schema/userSchema.js");

const Authentication = async (req, res, next) => {
  // check header

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes("Bearer")) {
    return res.status(401).send("Token does not start with Bearer");
  }
  const accesstoken = authHeader.split(" ")[1];
  const user = await User.findOne({ accesstoken });
  if (user) {
    //req.school = { schoolId: school._id, schoolName: school.schoolName };
    try {
      const payload = jwt.verify(accesstoken, process.env.JWT_SECRETE);
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).send("Authentication invalid");
    }
  } else {
    return res.status(401).send("user does not exist");
  }
};

module.exports = Authentication;
