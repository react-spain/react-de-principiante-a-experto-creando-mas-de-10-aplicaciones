const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//? crear una tarea
// api/tareas
router.post('/', 
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El Id del proyecto es obligatorio').not().isEmpty(),
    ],
    tareaController.crearTarea
)

module.exports = router;


//? Obtener las tareas por proyecto
// /api/tareas
router.get('/',
    auth,
    tareaController.obtenerTareas
)


//? Actualizar Tarea
router.put('/:id', 
    auth,
    tareaController.actualizarTareas
)

//? Eliminar Tarea
router.delete('/:id', 
    auth,
    tareaController.eliminarTarea
)