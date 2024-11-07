const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    let payload = {
        email: user.email,
        id: user._id,
        username: user.username
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1h'});
    return token;
  };
  
  module.exports = {
    generateToken,
  };