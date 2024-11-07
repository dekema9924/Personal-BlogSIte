const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) return res.status(400).json({ error: "Invalid Token" })
        let token = authHeader = authHeader.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (!decoded) return res.status(400).json({ error: 'Invalid Token' })
            res.status(200).json(decoded)
            req.user = decoded
            next();
        });
}


module.exports = verifyToken

// console.log(token)

