const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const usuarioController = require('../controllers/usuarioController')

// Crea un usuario
// api/usuarios
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser al menos 6 caracteres').isLength({min:6})
    ],
    usuarioController.crearUsuario
);

module.exports = router;