
const express = require('express');
const app = express()
const port = 3000
const LoginRouter = require('./routers/LoginRoute');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const cors = require('cors')
const cookie = require('cookie-parser')
require('dotenv').config();


//middlewares
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
})); app.use(cookie())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/login' , LoginRouter)

app.get('/', ((req, res)=>{
    res.redirect('/login')
}))

app.listen(port || process.env.PORT, (()=>{
    console.log(`server open on http://localhost:${port}`)
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log('connected to db'))
}))