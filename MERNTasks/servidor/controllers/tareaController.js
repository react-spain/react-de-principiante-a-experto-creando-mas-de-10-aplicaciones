const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

// crea una nueva tarea
exports.crearTarea = async (req, res) => {
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    try {

        const tarea = new Tarea(req.body);

        // Vamos a guardar el creador via JWT
        Tarea.creador = req.usuario.id;

        Tarea.save();
        res.json(Tarea);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}