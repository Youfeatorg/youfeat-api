import User from '../schema/userSchema.js'
import jwt from 'jsonwebtoken'

const handleVerifyEmail =async (req, res) =>{
    const {code} = req.body;

    const user =await User.findOne({code: Number(code)})
    if(!user) return res.sendStatus(401)

    try {
        const accesstoken = jwt.sign(
          { email: user.email },
          process.env.JWT_SECRETE,
          { expiresIn: "15m" }
        );
    
       await User.findOneAndUpdate({ email: user.email }, { accesstoken, code: '000000', verified: true })
        res.json({ accesstoken });
      } catch (err) {
        if (err) return res.sendStatus(400);
      }
}

export default handleVerifyEmail