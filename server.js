
const express = require('express');
const app = express()
const port = 3000
const LoginRouter = require('./routers/LoginRoute');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

//middlewares
app.use('/login' , LoginRouter)

app.get('/', ((req, res)=>{
    res.redirect('/login')
}))

app.listen(port || process.env.PORT, (()=>{
    console.log(`server open on https://localhost:${port}`)
    mongoose.connect('mongodb://localhost:27017/Blog')
    .then(console.log('connected to db'))
}))