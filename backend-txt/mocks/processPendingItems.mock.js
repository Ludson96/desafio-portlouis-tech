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

export const notaNIExistAndSmaller = {
  id_pedido: '1',
  número_item: 1,
  quantidade_produto: 10,
};

export const notaNIExistAndMaior = {
  id_pedido: '1',
  número_item: 4,
  quantidade_produto: 9,
};

export const notaNINotExist = {
  id_pedido: '5',
  número_item: 10,
  totalQuantidade: 6,
};

export const outDiferencaQuantity = {
  id_pedido: '1',
  itensFaltantes: 1,
  número_item: 1,
  quantidade_produto: 10,
};

export const pendentes = [];

export const allPedidos = [
  {
    id_pedido: '1',
    número_item: 1,
    código_produto: 'A22',
    quantidade_produto: 9,
    valor_unitário_produto: '10.00',
  },
  {
    id_pedido: '1',
    número_item: 2,
    código_produto: 'K13',
    quantidade_produto: 5,
    valor_unitário_produto: '15.00',
  },
  {
    id_pedido: '1',
    número_item: 3,
    código_produto: 'MR2',
    quantidade_produto: 10,
    valor_unitário_produto: '17.30',
  },
  {
    id_pedido: '1',
    número_item: 4,
    código_produto: 'SD9',
    quantidade_produto: 12,
    valor_unitário_produto: '5.00',
  },
  {
    id_pedido: '2',
    número_item: 1,
    código_produto: 'HU5',
    quantidade_produto: 5,
    valor_unitário_produto: '33.00',
  },
  {
    id_pedido: '2',
    número_item: 2,
    código_produto: 'XK1',
    quantidade_produto: 25,
    valor_unitário_produto: '20.00',
  },
  {
    id_pedido: '2',
    número_item: 3,
    código_produto: 'WF99',
    quantidade_produto: 90,
    valor_unitário_produto: '1.70',
  },
];

export const itensPendentes = [
  {
    itensFaltantes: 2,
    id_pedido: '1',
    número_item: 4,
    código_produto: 'SD9',
    quantidade_produto: 12,
    valor_unitário_produto: '5.00',
  },
  {
    itensFaltantes: 25,
    id_pedido: '2',
    número_item: 2,
    código_produto: 'XK1',
    quantidade_produto: 25,
    valor_unitário_produto: '20.00',
  },
];

export const outProcessaItensPendentes = [
  {
    itensFaltantes: 25,
    id_pedido: '2',
    número_item: 2,
    código_produto: 'XK1',
    quantidade_produto: 25,
    valor_unitário_produto: '20.00',
  },
  {
    itensFaltantes: 27,
    id_pedido: '3',
    número_item: 1,
    código_produto: 'A99',
    quantidade_produto: 39,
    valor_unitário_produto: '10.00',
  },
  {
    itensFaltantes: 4,
    id_pedido: '3',
    número_item: 2,
    código_produto: 'M2',
    quantidade_produto: 15,
    valor_unitário_produto: '17.00',
  },
  {
    itensFaltantes: 5,
    id_pedido: '3',
    número_item: 3,
    código_produto: 'K73',
    quantidade_produto: 110,
    valor_unitário_produto: '15.00',
  },
  {
    itensFaltantes: 3,
    id_pedido: '5',
    número_item: 1,
    código_produto: 'AM9',
    quantidade_produto: 66,
    valor_unitário_produto: '10.00',
  },
  {
    itensFaltantes: 15,
    id_pedido: '5',
    número_item: 2,
    código_produto: 'MR5',
    quantidade_produto: 15,
    valor_unitário_produto: '7.00',
  },
  {
    itensFaltantes: 9,
    id_pedido: '5',
    número_item: 4,
    código_produto: 'RR7',
    quantidade_produto: 21,
    valor_unitário_produto: '45.00',
  },
  {
    itensFaltantes: 1,
    id_pedido: '5',
    número_item: 6,
    código_produto: 'YY6',
    quantidade_produto: 10,
    valor_unitário_produto: '15.90',
  },
];

export const allPedidosPendentes = [
  {
    itensFaltantes: 25,
    id_pedido: '2',
    número_item: 2,
    código_produto: 'XK1',
    quantidade_produto: 25,
    valor_unitário_produto: '20.00',
  },
  {
    itensFaltantes: 27,
    id_pedido: '3',
    número_item: 1,
    código_produto: 'A99',
    quantidade_produto: 39,
    valor_unitário_produto: '10.00',
  },
  {
    itensFaltantes: 4,
    id_pedido: '3',
    número_item: 2,
    código_produto: 'M2',
    quantidade_produto: 15,
    valor_unitário_produto: '17.00',
  },
  {
    itensFaltantes: 5,
    id_pedido: '3',
    número_item: 3,
    código_produto: 'K73',
    quantidade_produto: 110,
    valor_unitário_produto: '15.00',
  },
  {
    itensFaltantes: 3,
    id_pedido: '5',
    número_item: 1,
    código_produto: 'AM9',
    quantidade_produto: 66,
    valor_unitário_produto: '10.00',
  },
  {
    itensFaltantes: 15,
    id_pedido: '5',
    número_item: 2,
    código_produto: 'MR5',
    quantidade_produto: 15,
    valor_unitário_produto: '7.00',
  },
  {
    itensFaltantes: 9,
    id_pedido: '5',
    número_item: 4,
    código_produto: 'RR7',
    quantidade_produto: 21,
    valor_unitário_produto: '45.00',
  },
  {
    itensFaltantes: 1,
    id_pedido: '5',
    número_item: 6,
    código_produto: 'YY6',
    quantidade_produto: 10,
    valor_unitário_produto: '15.90',
  },
];
