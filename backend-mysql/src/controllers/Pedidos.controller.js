const PedidosService = require('../services/Pedidos.service');
const getStatusCode = require('../helpers/htmlCodes');

module.exports = class PedidosController {
  constructor() {
    this.service = new PedidosService();
    this.getAllPedidos = this.getAllPedidos.bind(this);
  }

  async getAllPedidos(_req, res) {
    try {
      const { type, payload } = await this.service.getAllPedidos();
      if (type) return res.status(getStatusCode(type)).json({ message: 'Pedido not found' });
      return res.status(200).json(payload);
    } catch (erro) {
      return res.status(500).json({
        message: 'Erro sobre pedidos',
        error: erro.message,
      });
    }
  }
};
