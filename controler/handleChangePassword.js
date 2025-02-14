const User =  require('../schema/userSchema.js')
const bcrypt =  require('bcrypt')

const handleChangePassword = async(req, res)=>{
    const { code, password} = req.body
    const user =await User.findOne({ code })
    if(!user) return res.sendStatus(401)

    try{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
       const user =await User.findOneAndUpdate({code}, {password: hashedPassword, code: 100000,})
        res.sendStatus(200)
    }catch (err){
        res.sendStatus(400)
    }
}

module.exports = handleChangePassword