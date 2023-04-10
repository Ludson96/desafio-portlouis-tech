const { Pedidos } = require('../src/database/models');

const newPedido = Pedidos.create({
  id: 3,
  cliente: 'Fulano10',
  valorTotal: 0,
  saldoValor: 0,
});

const pedido = [
  {
    id: 1,
    data: '2023-04-08T00:05:23.000Z',
    cliente: 'Fulano1',
    valorTotal: '398.00',
    ItensPedido: [
      {
        valorTotalUnitario: 90,
        valorTotalPendenteUnitario: 0,
        id: 1,
        numeroItem: 1,
        codigoProduto: 'A22',
        quantidadeProduto: 9,
        quantidadeProdutoPendente: 0,
        valorUnitarioProduto: '10.00',
        idPedido: 1,
      },
    ],
  },
];

const outPayloadGetAllPedidos = [
  {
    id: 1,
    data: '2023-04-08T00:05:23.000Z',
    cliente: 'Fulano1',
    valorTotal: '398.00',
    ItensPedido: [{
      valorTotalUnitario: 90,
      valorTotalPendenteUnitario: 0,
      id: 1,
      numeroItem: 1,
      codigoProduto: 'A22',
      quantidadeProduto: 9,
      quantidadeProdutoPendente: 0,
      valorUnitarioProduto: '10.00',
      idPedido: 1,
    }],
  },
];

const inputNewPedido = {
  cliente: 'Fulano10',
  itensPedido: [
    {
      numeroItem: 1,
      codigoProduto: 'K22',
      quantidadeProduto: 10,
      valorUnitarioProduto: 10.00,
    },
  ],
};

const outCreatePedido = {
  id: 5,
  data: '2023-04-10T00:37:31.541Z',
  valorTotal: 100,
  cliente: 'Fulano10',
};

module.exports = {
  pedido,
  outPayloadGetAllPedidos,
  newPedido,
  inputNewPedido,
  outCreatePedido,
};
