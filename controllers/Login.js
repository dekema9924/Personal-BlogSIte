const accountmodel = require('../config/accountmodel')
const bcrypt = require('bcrypt')

const LoginUser = async(req,res)=>{

    const {email, password} = req.body
    const findUser = await accountmodel.findOne({email})
   

    if(!findUser) return res.status(400).json({message: "Invalid Email."})
        bcrypt.compare(password, findUser.password, function(err, isMatch) {
            if(!isMatch) return res.status(400).json({message: 'Invalid password'})
                console.log(findUser)//sign token
                res.status(200).json({message: 'Log in successfull', findUser})


        });

}

module.exports = LoginUser