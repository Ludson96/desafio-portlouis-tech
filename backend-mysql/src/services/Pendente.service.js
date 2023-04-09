const Sequelize = require('sequelize');
const SuperService = require('./SuperService');
const { ItensPedido, Pedidos } = require('../database/models');

module.exports = class PendenteService extends SuperService {
  constructor() {
    super(Pedidos);
  }

  async getPendentes() {
    const { Op } = Sequelize; // biblioteca de operadores
    const payload = await super.findAll({
      include: [{
        model: ItensPedido,
        as: 'ItensPedido',
        attributes: {
          exclude: [
            'id',
            'idPedido',
            'quantidadeProduto',
            'valorTotalUnitario',
            'codigoProduto',
          ],
        },
        where: {
          quantidadeProdutoPendente: {
            [Op.gt]: 0,
          },
        },
      }],
    });

    return { type: null, payload };
  }
};
