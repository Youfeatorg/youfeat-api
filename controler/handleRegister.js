/** @format */

import User from "../schema/userSchema.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const del = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ngbedejames415@gmail.com",
      pass: "blaspace",
    },
  });

  const option = {
    from: "ngbedejames415@gmail.com",
    to: "js5618171@gmail.com",
    subject: "testing app",
    text: "testing this shit",
  };

  transporter.sendMail(option, (err) => console.log(err));
};
const handleRegister = async (req, res) => {
  const { fullName, email, catigory, password, state, role, contestant, code } =
    req.body;

  try {
    const duplicate = await User.findOne({ email });
    if (duplicate) return res.sendStatus(403);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      password: hashedPassword,
      email,
      catigory,
      state,
      role,
      contestant,
      verified: false,
      code: code,
    });
    res.send(newUser);
  } catch (err) {
    console.log(err);
  }
};

export default handleRegister;
