const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Leer el token del header
    const token = req.header('x-auth-token');
     

    // revisar si hay tocken
    if(!token) {
        return res.status(401).json({ msg: 'No hay token, permiso no Valido' })
    }

    // Validar

    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token no valido' })
    }
}