const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();


// Conectar a la BD
conectarDB();

// Habilitar JSON
app.use(express.json({ extended: true }));


// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar las rutas
app.use('/api/usuarios', require("./routes/usuarios.routing"));
app.use('/api/auth', require("./routes/auth.routing"));
app.use('/api/proyectos', require("./routes/proyectos.routing"));
app.use('/api/tareas', require("./routes/tareas.routing"));

// arrancar la app
// npm run dev
app.listen(PORT, () => {
    console.log(`El servidor esta funcionado en el puerto: ${PORT}`)
})