// aplicacion/casos-de-uso/VerificarEstadoEntrega.js

class VerificarEstadoEntrega {
  constructor(servicioEntrega) {
    this.servicioEntrega = servicioEntrega;
  }

  async ejecutar(idEntrega) {
    return await this.servicioEntrega.verificarEstadoEntrega(idEntrega);
  }
}

module.exports = VerificarEstadoEntrega;
