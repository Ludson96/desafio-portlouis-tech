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
        attributes: {
          exclude: [
            'id',
            'idPedido',
            'quantidadeProdutoPendente',
            'valorTotalPendenteUnitario',
            'saldoValor',
          ],
        },
      }],
    });

    if (result.length === 0) return { type: 'NOT_FOUND', payload: result };

    return { type: null, payload: result };
  }

  async createPedido({ cliente, itensPedido }) {
    let valorTotal = 0;
    const newPedido = await super.create({ cliente, valorTotal });
    await itensPedido.forEach((item) => {
      valorTotal += item.quantidadeProduto * item.valorUnitarioProduto;
      ItensPedido.create(
        {
          idPedido: newPedido.id,
          quantidadeProdutoPendente: item.quantidadeProduto,
          ...item,
        },
      );
    });
    newPedido.valorTotal = valorTotal;
    await newPedido.save();
    const { saldoValor: _unused, ...payload } = newPedido.toJSON();
    return { type: null, payload };
  }
};
