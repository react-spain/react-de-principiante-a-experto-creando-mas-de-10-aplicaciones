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


// Obtiene las tareas proproyectos
exports.obtenerTareas = async (req, res) => {
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

        //  Obtener las Tareas por proyectos
        const tareas = await Tarea.find({ proyecto })
        res.json({ tareas });

        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }

}


// Actualizar una tarea
exports.actualizarTareas = async (req, res) => {
    try {
        // Extraer el proyecto y comprobar que existe
        const { proyecto, nombre, estado } = req.body;
        
        // revisamos si la tarea existe
        const tareaExiste  = await Tarea.findById(req.params.id);
        if(!tareaExiste) {
            return res.status(404).json({ msg: 'Tarea no Encontrado' })
        }


        // Creamos un objeto con la nueva información
        const nuevaTarea = {}
        if (nombre) nuevaTarea.nombre = nombre
        if (estado) nuevaTarea.estado = estado


        // Guardar la tarea
        let tarea = await Tarea.findOneAndUpdate({_id: req.params.id}, nuevaTarea, { new:true })
        res.json({ tarea })

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}