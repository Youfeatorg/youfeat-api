/** @format */

import User from "../schema/userSchema.js"
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"

const handleRegister = async (req, res) => {
  const { fullName, email, catigory, password, state, role, contestant } =
    req.body;

    const transporter = nodemailer.createTransport({
      port: 465, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Password,
      },
      secure: true,
      from: "process.env.Email_User"
    });

  const code = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  const maildata = {
    from: process.env.Email_User,
    to: email,
    subject: `${fullName} verify your account`,
    html: `
    <h1>Hello, ${fullName}</h1>
    <h2>Thank you for signing up with YouFeat</h2>
    <p>Your verification code is <b>${code}</b> </p>
    `,
  };

  try {
    const duplicate = await User.findOne({ email });
    if (duplicate) return res.sendStatus(403);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    transporter.sendMail(maildata, (error, info) => {
      if (error) {
        console.log(error);
        console.log(info);
        res.sendStatus(400)
      }
    });

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
