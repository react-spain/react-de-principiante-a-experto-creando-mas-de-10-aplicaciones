const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.crearUsuario = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    const {email, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email});
        if(usuario){
            res.status(400).json({
                msg: 'El usuario ya existe'
            });
        }

        // crea el usuario
        usuario = new Usuario(req.body);

        // hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password =  await bcryptjs.hash(password, salt)

        // guarda
        await usuario.save()
        res.status(200).json({
            msg: 'Usuario creado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}