

const express = require('express')
const LoginRouter = express.Router()
const CreateAccount = require('../controllers/createAccount')
const LoginUser = require('../controllers/Login')

LoginRouter.use(express.urlencoded({extended: true}))
LoginRouter.use(express.json())

LoginRouter.post('/register', CreateAccount )
LoginRouter.post('/signin', LoginUser)




module.exports = LoginRouter;