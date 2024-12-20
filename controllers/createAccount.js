
const accountmodel = require('../config/accountmodel')
const bcrypt = require('bcrypt')

const CreateAccount =async (req, res)=>{
    const {username, email, password} = req.body

    const EmailExist = await accountmodel.findOne({ email})
    if(EmailExist) return res.status(400).json({error: 'Email already Exist. Please log in.'})
        bcrypt.hash(password, 10, async function(err, hash) {
            let newAccount = await accountmodel.create({
                email, password:hash, username
            })
            await newAccount.save().then((result)=>{
                if(result) return res.status(200).json({message: 'success.'})
                    res.status(400).json({error: 'Failed to create account.'})
            })

        });
   

   
}

module.exports = CreateAccount;


