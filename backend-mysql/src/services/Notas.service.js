const SuperService = require('./SuperService');
const { Notas, ItensNota } = require('../database/models');
const { Pedidos, ItensPedido } = require('../database/models/index');

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
    await itensNota.forEach(async (nota) => {
      ItensNota.create({ idNota: newNota.id, ...nota });
      const itemPedido = await ItensPedido.findOne({
        where: {
          idPedido: nota.idPedido,
          numeroItem: nota.numeroItem,
        },
      });
      const pedido = await Pedidos.findOne({
        where: {
          id: nota.idPedido,
        },
      });
      if (itemPedido) {
        itemPedido.quantidadeProdutoPendente -= nota.quantidadeProduto;
        await itemPedido.save();
      }
      if (pedido) {
        pedido.saldoValor = itemPedido.quantidadeProdutoPendente * itemPedido.valorUnitarioProduto;
        await pedido.save();
      }
    });

    return { type: null, payload: newNota };
  }
};
