const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
})

module.exports = mongoose.model('accountdb', accountSchema)