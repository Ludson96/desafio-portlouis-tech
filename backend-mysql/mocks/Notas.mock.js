const newNota = [
  {
    id: 1,
    data: '2023-04-08T17:15:53.000Z',
    vendedor: 'Fulano1',
    ItensNota: [
      {
        idPedido: 1,
        numeroItem: 4,
        quantidadeProduto: 4,
      },
      {
        idPedido: 1,
        numeroItem: 2,
        quantidadeProduto: 5,
      },
    ],
  },
];

const outPayloadGetAllNotas = [
  {
    id: 1,
    data: '2023-04-08T17:15:53.000Z',
    vendedor: 'Fulano1',
    ItensNota: [
      { idPedido: 1, numeroItem: 4, quantidadeProduto: 4 },
      { idPedido: 1, numeroItem: 2, quantidadeProduto: 5 },
    ],
  },
];

const paramCreateNota = {
  vendedor: 'Fulano1',
  itensNota: [
    {
      idPedido: 1,
      numeroItem: 1,
      quantidadeProduto: 1,
    },
  ],
};

const outCreate = {
  id: 2,
};

const outCreateNota = {
  id: 2,
};

const itemPedido = {
  idPedido: 1,
  numeroItem: 1,
  codigoProduto: 'K22',
  quantidadeProduto: 10,
  valorUnitarioProduto: 10.00,
};

module.exports = {
  newNota,
  outPayloadGetAllNotas,
  paramCreateNota,
  outCreate,
  outCreateNota,
  itemPedido,
};
