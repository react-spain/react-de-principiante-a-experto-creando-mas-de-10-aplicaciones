const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    registro: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema)