

const express = require('express')
const LoginRouter = express.Router()
const CreateAccount = require('../controllers/createAccount')
const LoginUser = require('../controllers/Login')
const verifyToken = require('../Utils/Auth')



LoginRouter.post('/register', CreateAccount )
LoginRouter.post('/signin', LoginUser)
LoginRouter.get('/dashboard', verifyToken)




module.exports = LoginRouter;