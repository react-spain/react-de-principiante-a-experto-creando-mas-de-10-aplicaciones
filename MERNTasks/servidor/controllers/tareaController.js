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
        // Extraer el proyecto y comprobar que existe
        const { proyecto } = req.body;
        const existeProyecto = await Proyecto.findById(proyecto)
        if(!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no Encontrado' })
        }

        // Revisar si el proyecto pertenece al usuario
        if (existeProyecto.creador.toString() != req.usuario.id) {
            res.status(401).send('No autorizado');
        }

        // Creamos la Tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({ tarea });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}