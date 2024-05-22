// aplicacion/casos-de-uso/SolicitarEntrega.js

class SolicitarEntrega {
  constructor(servicioEntrega) {
    this.servicioEntrega = servicioEntrega;
  }

  async ejecutar(entrega) {
    return await this.servicioEntrega.solicitarEntrega(entrega);
  }
}

module.exports = SolicitarEntrega;

  