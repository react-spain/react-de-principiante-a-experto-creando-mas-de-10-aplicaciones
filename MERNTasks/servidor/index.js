const express = require('express');

// crear el servidor
const app = express();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Definir la pagina principal
// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// })

// arrancar la app
// npm run dev
app.listen(PORT, () => {
    console.log(`El servidor esta funcionado en el puerto: ${PORT}`)
})