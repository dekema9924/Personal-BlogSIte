

const express = require('express')
const LoginRouter = express.Router()
const CreateAccount = require('../controllers/createAccount')
const LoginUser = require('../controllers/Login')
const verifyToken = require('../Utils/Auth')
const dashboard = require('../controllers/Dashboard')


LoginRouter.post('/register', CreateAccount )
LoginRouter.post('/signin', LoginUser)
LoginRouter.get('/dashboard', verifyToken, dashboard)




module.exports = LoginRouter;