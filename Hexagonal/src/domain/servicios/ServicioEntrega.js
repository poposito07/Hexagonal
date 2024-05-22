// dominio/servicios/ServicioEntrega.js

class ServicioEntrega {
  constructor(repositorioEntrega) {
    this.repositorioEntrega = repositorioEntrega;
  }

  async solicitarEntrega(entrega) {
    return await this.repositorioEntrega.guardar(entrega);
  }

  async verificarEstadoEntrega(id) {
    return await this.repositorioEntrega.encontrarPorId(id);
  }
}

module.exports = ServicioEntrega;
