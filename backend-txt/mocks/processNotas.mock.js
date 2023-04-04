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

export const allNotas = [
  {
    id: '1',
    notas: [
      {
        id_pedido: '1',
        número_item: 4,
        quantidade_produto: 4,
      },
      {
        id_pedido: '1',
        número_item: 2,
        quantidade_produto: 5,
      },
    ],
  },
  {
    id: '2',
    notas: [
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
    ],
  },
  {
    id: '3',
    notas: [
      {
        id_pedido: '5',
        número_item: 3,
        quantidade_produto: 7,
      },
      {
        id_pedido: '5',
        número_item: 4,
        quantidade_produto: 1,
      },
      {
        id_pedido: '5',
        número_item: 1,
        quantidade_produto: 21,
      },
      {
        id_pedido: '5',
        número_item: 6,
        quantidade_produto: 4,
      },
    ],
  },
  {
    id: '4',
    notas: [
      {
        id_pedido: '5',
        número_item: 3,
        quantidade_produto: 11,
      },
      {
        id_pedido: '5',
        número_item: 4,
        quantidade_produto: 9,
      },
      {
        id_pedido: '5',
        número_item: 1,
        quantidade_produto: 20,
      },
      {
        id_pedido: '5',
        número_item: 6,
        quantidade_produto: 5,
      },
    ],
  },
  {
    id: '5',
    notas: [
      {
        id_pedido: '3',
        número_item: 2,
        quantidade_produto: 5,
      },
      {
        id_pedido: '3',
        número_item: 3,
        quantidade_produto: 50,
      },
      {
        id_pedido: '3',
        número_item: 4,
        quantidade_produto: 15,
      },
      {
        id_pedido: '3',
        número_item: 1,
        quantidade_produto: 9,
      },
    ],
  },
  {
    id: '6',
    notas: [
      {
        id_pedido: '1',
        número_item: 3,
        quantidade_produto: 3,
      },
      {
        id_pedido: '1',
        número_item: 4,
        quantidade_produto: 8,
      },
      {
        id_pedido: '1',
        número_item: 1,
        quantidade_produto: 9,
      },
    ],
  },
  {
    id: '7',
    notas: [
      {
        id_pedido: '4',
        número_item: 3,
        quantidade_produto: 25,
      },
      {
        id_pedido: '1',
        número_item: 3,
        quantidade_produto: 7,
      },
      {
        id_pedido: '4',
        número_item: 2,
        quantidade_produto: 51,
      },
      {
        id_pedido: '4',
        número_item: 1,
        quantidade_produto: 170,
      },
    ],
  },
  {
    id: '8',
    notas: [
      {
        id_pedido: '5',
        número_item: 7,
        quantidade_produto: 7,
      },
      {
        id_pedido: '5',
        número_item: 4,
        quantidade_produto: 2,
      },
      {
        id_pedido: '5',
        número_item: 1,
        quantidade_produto: 22,
      },
      {
        id_pedido: '5',
        número_item: 5,
        quantidade_produto: 6,
      },
    ],
  },
  {
    id: '9',
    notas: [
      {
        id_pedido: '3',
        número_item: 4,
        quantidade_produto: 5,
      },
      {
        id_pedido: '3',
        número_item: 5,
        quantidade_produto: 6,
      },
      {
        id_pedido: '3',
        número_item: 2,
        quantidade_produto: 6,
      },
      {
        id_pedido: '3',
        número_item: 3,
        quantidade_produto: 55,
      },
      {
        id_pedido: '3',
        número_item: 1,
        quantidade_produto: 3,
      },
    ],
  },
];
