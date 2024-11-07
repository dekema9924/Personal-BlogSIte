const accountmodel = require('../config/accountmodel')
const bcrypt = require('bcrypt')
const { generateToken } = require('../Utils/createToken')




const LoginUser = async (req, res) => {

    const { email, password } = req.body
    const findUser = await accountmodel.findOne({ email })

    if (!findUser) return res.status(400).json({ message: "Invalid Email." })
    bcrypt.compare(password, findUser.password, function (err, isMatch) {
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' })
        //sign token
        let t = generateToken(findUser)
        if (t) return res.status(200).json({ message: 'Login Successfull', token: t })
        res.status(500).json({ error: 'Login failed' });
    });

}

module.exports = LoginUser