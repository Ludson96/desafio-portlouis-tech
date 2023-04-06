const SuperService = require('./SuperService');
const { Pedidos, ItensPedido } = require('../database/models');

module.exports = class PedidosService extends SuperService {
  constructor() {
    super(Pedidos);
  }

  async getAllPedidos() {
    const result = await super.findAll({
      include: [{
        model: ItensPedido,
        as: 'ItensPedido',
        attributes: { exclude: ['id', 'idPedido'] },
      }],
    });

    if (result.length === 0) return { type: 'NOT_FOUND', payload: result };

    return { type: null, payload: result };
  }
};
