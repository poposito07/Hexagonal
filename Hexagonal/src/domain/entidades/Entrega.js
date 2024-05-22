// dominio/entidades/Entrega.js

class Entrega {
  constructor(id, direccion, estado = 'pendiente') {
    this.id = id;
    this.direccion = direccion;
    this.estado = estado;
    this.creadoEn = new Date();
  }
}

module.exports = Entrega;
