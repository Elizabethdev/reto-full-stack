const express = require('express');

const conectarDB = require('./config/db')
//crear el servidor
const app = express();

//conectar la BD
conectarDB();

//habilitar express.json
app.use(express.json({extended: true}));

//puerto de la app
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`el servidor esta funcionando en el puerto ${PORT}`);
})