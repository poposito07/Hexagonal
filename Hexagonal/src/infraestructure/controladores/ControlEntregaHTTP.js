// infraestructura/controladores/ControladorEntregaHTTP.js

const express = require('express');
const router = express.Router();
const Entrega = require('../../domain/entidades/Entrega');
const ServicioEntrega = require('../../domain/servicios/ServicioEntrega');
const RepositorioEntrega = require('../base-datos/RepositorioEntregaSQL'); // Corrigiendo la ruta

const servicioEntrega = new ServicioEntrega(new RepositorioEntrega());

router.post('/entrega', async (req, res) => {
  const { direccion } = req.body;
  const entrega = new Entrega(Date.now(), direccion);
  const resultado = await servicioEntrega.solicitarEntrega(entrega);
  res.json(resultado);
});

router.get('/entrega/:id', async (req, res) => {
  const { id } = req.params;
  const entrega = await servicioEntrega.verificarEstadoEntrega(id);
  if (!entrega) {
    res.status(404).json({ error: 'Entrega no encontrada' });
  } else {
    res.json(entrega);
  }
});

module.exports = router;