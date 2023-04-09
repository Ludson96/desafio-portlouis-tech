const notasSchema = {
  tpe: 'object',
  properties: {
    vendedor: { type: 'string' },
    itensNota: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          idPedido: { type: 'number', minimum: 1 },
          numeroItem: { type: 'number', minimum: 1 },
          quantidadeProduto: { type: 'number', minimum: 1 },
        },
        required: ['idPedido', 'numeroItem', 'quantidadeProduto'],
      },
    },
  },
  required: ['vendedor', 'itensNota'],
};

module.exports = notasSchema;
