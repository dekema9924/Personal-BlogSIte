
const accountmodel = require('../config/accountmodel')


const dashboard =async (req, res)=>{
   await  accountmodel.findById(req.user.id).select("-password")
   .then((result)=>{
        res.status(200).json({user: result, isAuth: true})
    
   })
}   

module.exports = dashboard