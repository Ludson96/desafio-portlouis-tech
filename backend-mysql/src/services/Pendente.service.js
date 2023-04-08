const Sequelize = require('sequelize');
const SuperService = require('./SuperService');
const { ItensPedido, Pedidos } = require('../database/models');
const NotasService = require('./Notas.service');
const PedidosService = require('./Pedidos.service');

module.exports = class PendenteService extends SuperService {
  constructor() {
    super(ItensPedido);
    this.notas = new NotasService();
    // this.pedidos = new PedidosService();
  }

  async verificaPendentes() {
    const { payload } = await this.notas.getAllNotas();
    payload.forEach(async ({ ItensNota }) => {
      await Promise.all(
        ItensNota.map(async (nota) => {
          const item = await super.findOne({
            idPedido: nota.idPedido,
            numeroItem: nota.numeroItem,
          });
          if (item) {
            item.quantidadeProdutoPendente -= nota.quantidadeProdutoPendente;
            await item.save();
          }
        }),
      );
    });
  }

  async sumTotalUnit() {
    const { Op } = Sequelize; // biblioteca de operadores
    const pedidos = await Pedidos.findAll({
      include: [{
        model: ItensPedido,
        as: 'ItensPedido',
        attributes: {
          exclude: ['id', 'idPedido', 'quantidadeProduto', 'valorTotalUnitario'],
        },
        where: {
          quantidadeProdutoPendente: {
            [Op.gt]: 0,
          },
        },
      }],
    });

    console.log('🚀 ~  ~ PendenteService ~ sumTotalUnit ~ pedidos:', pedidos);
  }

  async getPendentes() {
    await this.verificaPendentes();
    await this.sumTotalUnit();
  }
};

// const result = await super.findAll({
//   include: [
//     {
//       model: ItensPedido,
//       as: 'ItensPedido',
//       attributes: { exclude: ['id'] },
//     },
//     {
//       model: ItensNota,
//       as: 'ItensNota',
//       attributes: { exclude: ['id', 'idNota', 'id_nota', 'id_pedido'] },
//     },
//   ],
// });
