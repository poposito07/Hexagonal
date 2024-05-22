// src/infraestructure/base-datos/RepositorioEntregaSQL.js

const RepositorioEntrega = require('../../domain/repositorios/RepositorioEntrega');

class RepositorioEntregaSQL extends RepositorioEntrega {
  constructor() {
    super();
    this.entregas = [];
  }

  async guardar(entrega) {
    this.entregas.push(entrega);
    return entrega;
  }

  async encontrarPorId(id) {
    return this.entregas.find(entrega => entrega.id === id);
  }
}

module.exports = RepositorioEntregaSQL;
