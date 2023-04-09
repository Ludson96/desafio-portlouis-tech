const pedidoSchema = {
  type: 'object',
  properties: {
    cliente: { type: 'string' },
    itensPedido: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          numeroItem: { type: 'integer', minimum: 1 },
          codigoProduto: { type: 'string' },
          quantidadeProduto: { type: 'integer', minimum: 1 },
          valorUnitarioProduto: { type: 'number', minimum: 0.01 },
        },
        required: ['numeroItem', 'codigoProduto', 'quantidadeProduto', 'valorUnitarioProduto'],
      },
    },
  },
  required: ['cliente', 'itensPedido'],
};

module.exports = pedidoSchema;