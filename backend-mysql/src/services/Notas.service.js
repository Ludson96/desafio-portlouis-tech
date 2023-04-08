const SuperService = require('./SuperService');
const { Notas, ItensNota } = require('../database/models');
const { ItensPedido } = require('../database/models/index');

module.exports = class NotasService extends SuperService {
  constructor() {
    super(Notas);
  }

  async getAllNotas() {
    const result = await super.findAll({
      include: [{
        model: ItensNota,
        as: 'ItensNota',
        attributes: { exclude: ['id', 'idNota', 'id_nota', 'id_pedido'] },
      }],
    });

    if (result.length === 0) return { type: 'NOT_FOUND', payload: result };

    return { type: null, payload: result };
  }

  async createNota({ vendedor, itensNota }) {
    const newNota = await super.create({ vendedor });
    await itensNota.forEach(async (item) => {
      ItensNota.create({ idNota: newNota.id, ...item });
      const itemN = await ItensPedido.findOne({
        where: {
          idPedido: item.idPedido,
          numeroItem: item.numeroItem,
        },
      });
      if (itemN) {
        itemN.quantidadeProdutoPendente -= item.quantidadeProduto;
        await itemN.save();
      }
    });

    return { type: null, payload: newNota };
  }
};
