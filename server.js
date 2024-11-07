
const express = require('express');
const app = express()
const port = 3000
const LoginRouter = require('./routers/LoginRoute');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const session = require('express-session')


//middlewares
app.use(session({
    secret: 'key that signs the cookie', //any string
    resave: false, 
    saveUninitialized: false,
    cookie: {
         maxAge:3600000 * 60, //when the session expires.
        //  secure: true
        }
  }))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/login' , LoginRouter)

app.get('/', ((req, res)=>{
    res.redirect('/login')
}))

app.listen(port || process.env.PORT, (()=>{
    console.log(`server open on https://localhost:${port}`)
    mongoose.connect('mongodb://localhost:27017/Blog')
    .then(console.log('connected to db'))
}))