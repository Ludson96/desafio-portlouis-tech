const SuperService = require('./SuperService');
const { ItensPedido } = require('../database/models');
const NotasService = require('./Notas.service');

module.exports = class PendenteService extends SuperService {
  constructor() {
    super(ItensPedido);
    this.notas = new NotasService();
  }

  async getPendentes() {
    const { payload } = await this.notas.getAllNotas();
    payload.forEach(({ ItensNota }) => {
      ItensNota.forEach(async (nota) => {
        const item = await super.findOne(
          {
            idPedido: nota.idPedido,
            numeroItem: nota.numeroItem,
          },
        );
        item.quantidadeProduto -= nota.quantidadeProduto;
        await item.save();
      });
    });
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
