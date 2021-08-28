const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();


// Conectar a la BD
conectarDB();

// Connect to mongodb
// const URI = process.env.DB_MONGO
// mongoose.connect("mongodb+srv://admin:x1234567890@cluster0.9pk6w.mongodb.net/merntasks", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err => {
//     if(err) throw err;
//     console.log("Connected to mongodb")
// })

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