/** @format */

import User from "../schema/userSchema.js"
import nodemailer from "nodemailer"

const handleCheckEmail =async (req, res) => {
  const {email} = req.body

  const foundUser =await User.findOne({email})

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
    subject: `${foundUser.fullName} verify your account`,
    html: `
    <h2>Hello, ${foundUser.fullName}</h2>
    <h2>Thank you for signing up with YouFeat</h2>
    <p>Your verification code is <b>${code}</b> </p>
    `,
  };

  transporter.sendMail(maildata, (error, info) => {
    if (error) {
      console.log(error);
      console.log(info);
      res.sendStatus(400)
    }
  });

  const user = await User.findOneAndUpdate({ email: email }, { code: code });
  res.sendStatus(200)
};

export default handleCheckEmail;
