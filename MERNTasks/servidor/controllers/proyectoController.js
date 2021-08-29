const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    try {

        const proyecto = new Proyecto(req.body);

        // Vamos a guardar el creador via JWT
        proyecto.creador = req.usuario.id;

        proyecto.save();
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obteniendo todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({ creado: -1 });
        res.json(proyectos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Actualiza un proyecto
exports.actualizarProyecto = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    // extraer la info

    try {
        const { nombre } = req.body
        const nuevoProyecto = {};
        if (nombre) {
            nuevoProyecto.nombre = nombre
        }

        // revisar el ID
        idProyecto = req.params.id
        let proyecto = await Proyecto.findById(idProyecto);

        // Si existe
        if (!proyecto) {
            res.status(404).send('Proyecto no Encontrado');
        }

        // verificar el creador
        if (proyecto.creador.toString() != req.usuario.id) {
            res.status(401).send('No autorizado');
        }

        proyecto = await Proyecto.findOneAndUpdate(
            { _id: idProyecto },
            { $set: nuevoProyecto },
            { new: true })

        res.json({ proyecto });


        // actualizar
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


// Elimina un proyecto por su ID

exports.eliminarProyecto = async (req, res) => {
    try {
        // revisar el ID
        idProyecto = req.params.id
        let proyecto = await Proyecto.findById(idProyecto);

        // Si existe
        if (!proyecto) {
            res.status(404).send('Proyecto no Encontrado');
        }

        // verificar el creador
        if (proyecto.creador.toString() != req.usuario.id) {
            res.status(401).send('No autorizado');
        }

        // Eliminar el proyecto
        await Proyecto.findOneAndRemove({ _id: idProyecto })
        res.json({msg: 'Proyecto Eliminado'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}