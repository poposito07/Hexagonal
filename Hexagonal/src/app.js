// app.js

const express = require('express');
const controladorEntregaHTTP = require('./infraestructure/controladores/ControlEntregaHTTP');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', controladorEntregaHTTP);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
