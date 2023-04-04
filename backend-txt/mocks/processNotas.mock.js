export const linha1 = JSON.stringify({ id_pedido: 1, número_item: 2, quantidade_produto: 5 });
export const linha2 = JSON.stringify({ id_pedido: 2, número_item: 1, quantidade_produto: 5 });
export const linha3 = JSON.stringify({ id_pedido: 2, número_item: 3, quantidade_produto: 90 });
export const wrongLine = JSON.stringify({ id_pedido: 1, número_item: '2', quantidade_produto: 5 });

export const linhas = [linha1, linha2, linha3];

export const outputTodasNotas = [
  {
    id_pedido: '1',
    número_item: 2,
    quantidade_produto: 5,
  },
  {
    id_pedido: '2',
    número_item: 1,
    quantidade_produto: 5,
  },
  {
    id_pedido: '2',
    número_item: 3,
    quantidade_produto: 90,
  },
];

export const outAgruparTodasNotas = [
  {
    id_pedido: '2',
    número_item: 1,
    quantidade_produto: 5,
  },
  {
    id_pedido: '2',
    número_item: 3,
    quantidade_produto: 90,
  },
];

export const outNotas = [
  {
    id: '1',
    notas: [
      { id_pedido: '1', número_item: 4, quantidade_produto: 4 },
      { id_pedido: '1', número_item: 2, quantidade_produto: 5 },
    ],
  },
  {
    id: '2',
    notas: [
      { id_pedido: '2', número_item: 1, quantidade_produto: 5 },
      { id_pedido: '2', número_item: 3, quantidade_produto: 90 },
    ],
  },
];

export const verifyNotas = [
  {
    id_pedido: '2',
    número_item: 1,
    quantidade_produto: 5,
  },
  {
    id_pedido: '2',
    número_item: 3,
    quantidade_produto: 90,
  },
];

export const wrongVerifyNotas = [
  {
    id_pedido: '1',
    número_item: 3,
    quantidade_produto: 5,
  },
  {
    id_pedido: '2',
    número_item: 1,
    quantidade_produto: 5,
  },
  {
    id_pedido: '2',
    número_item: 1,
    quantidade_produto: 90,
  },
];
