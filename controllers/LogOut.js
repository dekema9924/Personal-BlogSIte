
const Logout =(req, res)=>{
    // res.cookie("jwtToken", ' ', {
    //     maxAge: 0, 
    // })  
    res.status(200).clearCookie('jwtToken', {
        maxAge: 0
    }).json({message: 'logging off'});
   
    
 
}

module.exports = Logout