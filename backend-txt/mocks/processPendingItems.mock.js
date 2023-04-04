export const pedidos = [
  { id_pedido: '1', número_item: 4, quantidade_produto: 2 },
  { id_pedido: '1', número_item: 2, quantidade_produto: 5 },
  { id_pedido: '1', número_item: 3, quantidade_produto: 3 },
  { id_pedido: '1', número_item: 4, quantidade_produto: 8 },
  { id_pedido: '1', número_item: 1, quantidade_produto: 9 },
  { id_pedido: '1', número_item: 3, quantidade_produto: 7 },
  { id_pedido: '2', número_item: 1, quantidade_produto: 5 },
  { id_pedido: '2', número_item: 3, quantidade_produto: 90 },
];

export const outPedidosAgrupados = {
  1: { '1-4': 10, '1-2': 5, '1-3': 10, '1-1': 9 },
  2: { '2-1': 5, '2-3': 90 },
};

export const outGetTotalQuantidade = [
  { id_pedido: '1', número_item: 4, totalQuantidade: 10 },
  { id_pedido: '1', número_item: 2, totalQuantidade: 5 },
  { id_pedido: '1', número_item: 3, totalQuantidade: 10 },
  { id_pedido: '1', número_item: 1, totalQuantidade: 9 },
  { id_pedido: '2', número_item: 1, totalQuantidade: 5 },
  { id_pedido: '2', número_item: 3, totalQuantidade: 90 },
];

export const pedido = {
  id: '5',
  pedidos: [
    {
      número_item: 1,
      código_produto: 'AM9',
      quantidade_produto: 66,
      valor_unitário_produto: '10.00',
    },
    {
      número_item: 2,
      código_produto: 'MR5',
      quantidade_produto: 15,
      valor_unitário_produto: '7.00',
    },
    {
      número_item: 3,
      código_produto: 'SS3',
      quantidade_produto: 18,
      valor_unitário_produto: '15.00',
    },
    {
      número_item: 5,
      código_produto: 'FM8',
      quantidade_produto: 7,
      valor_unitário_produto: '19.00',
    },
    {
      número_item: 6,
      código_produto: 'YY6',
      quantidade_produto: 10,
      valor_unitário_produto: '15.90',
    },
    {
      número_item: 7,
      código_produto: 'T19',
      quantidade_produto: 7,
      valor_unitário_produto: '21.00',
    },
  ],
};

export const notaNIExistAndSmaller = {
  id_pedido: '5',
  número_item: 5,
  totalQuantidade: 6,
};

export const notaNIExistAndMaior = {
  id_pedido: '5',
  número_item: 5,
  totalQuantidade: 8,
};

export const notaNINotExist = {
  id_pedido: '5',
  número_item: 4,
  totalQuantidade: 6,
};

export const outDiferencaQuantity = {
  id_pedido: '5',
  itensFaltantes: 1,
  número_item: 5,
  totalQuantidade: 6,
};

export const pendentes = [];

export const allPedidos = [
  {
    id: '1',
    pedidos: [
      {
        número_item: 1,
        código_produto: 'A22',
        quantidade_produto: 9,
        valor_unitário_produto: '10.00',
      },
      {
        número_item: 2,
        código_produto: 'K13',
        quantidade_produto: 5,
        valor_unitário_produto: '15.00',
      },
      {
        número_item: 3,
        código_produto: 'MR2',
        quantidade_produto: 10,
        valor_unitário_produto: '17.30',
      },
      {
        número_item: 4,
        código_produto: 'SD9',
        quantidade_produto: 12,
        valor_unitário_produto: '5.00',
      },
    ],
  },
  {
    id: '2',
    pedidos: [
      {
        número_item: 1,
        código_produto: 'HU5',
        quantidade_produto: 5,
        valor_unitário_produto: '33.00',
      },
      {
        número_item: 2,
        código_produto: 'XK1',
        quantidade_produto: 25,
        valor_unitário_produto: '20.00',
      },
      {
        número_item: 3,
        código_produto: 'WF99',
        quantidade_produto: 90,
        valor_unitário_produto: '1.70',
      },
    ],
  },
];

export const itensPendentes = [
  {
    id_pedido: '1',
    itensFaltantes: 2,
    número_item: 4,
    totalQuantidade: 10,
  },
];

export const outProcessaItensPendentes = [
  {
    id_pedido: '3',
    itensFaltantes: 4,
    número_item: 2,
    totalQuantidade: 11,
  },
  {
    id_pedido: '3',
    itensFaltantes: 5,
    número_item: 3,
    totalQuantidade: 105,
  },
  {
    id_pedido: '3',
    itensFaltantes: 27,
    número_item: 1,
    totalQuantidade: 12,
  },
  {
    id_pedido: '5',
    itensFaltantes: 9,
    número_item: 4,
    totalQuantidade: 12,
  },
  {
    id_pedido: '5',
    itensFaltantes: 3,
    número_item: 1,
    totalQuantidade: 63,
  },
  {
    id_pedido: '5',
    itensFaltantes: 1,
    número_item: 6,
    totalQuantidade: 9,
  },
];
