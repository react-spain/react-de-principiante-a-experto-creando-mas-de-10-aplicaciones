const Proyecto = require('../models/Proyecto');

exports.crearProyecto =  async ( req, res ) => {
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