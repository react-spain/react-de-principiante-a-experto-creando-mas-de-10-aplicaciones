const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async(req, res) => {
    // revisar si hay errores
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    // extraer el email y password
    const { email, password} = req.body;

    try {
        // revisar que este registrado
        let usuario = await Usuario.findOne({email});
        if(!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' })
        }

        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passCorrecto) {
            return res.status(400).json({ msg: 'El password es incorrecto' })
        }

        // Crear y firmar el Jwt
        const payload = {
            usuario: {
                id: usuario.id
            }
        }

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // 1 hora
        }, (error, token) => {
            if(error) throw error;
            res.status(200).json({
                token
            });
        })


    } catch (error) {
        console.log(error);
    }
}