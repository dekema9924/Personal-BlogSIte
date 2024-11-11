const accountmodel = require('../config/accountmodel')
const bcrypt = require('bcrypt')
const { generateToken } = require('../Utils/createToken')




const LoginUser = async (req, res) => {

    const { email, password } = req.body
    const findUser = await accountmodel.findOne({ email })

    if (!findUser) return res.status(400).json({ error: "Invalid Credentials." })
    bcrypt.compare(password, findUser.password, function (err, isMatch) {
        if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' })
        //sign token
        let t = generateToken(findUser)
        // res.setHeader('Authorization', `Bearer ${t}`);
      
        if(t){
            res.cookie("jwtToken", t, {
                httpOnly: false,
                maxAge: 900000, // 15 minutes
                // SameSite: "none", 
                // secure: true // Only send over HTTPS (if in production)
                // expires:  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            })

            res.status(200).json({ message: 'Login Successfull'  })
        }else{
            res.status(500).json({ error: 'Login failed' });

        }
    });

}

module.exports = LoginUser