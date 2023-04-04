export const line1 = JSON.stringify({
  número_item: 2,
  código_produto: 'K13',
  quantidade_produto: 5,
  valor_unitário_produto: '15,00',
});

export const line2 = JSON.stringify({
  número_item: 4,
  código_produto: 'SD9',
  quantidade_produto: 12,
  valor_unitário_produto: '5,00',
});

export const line3 = JSON.stringify({
  número_item: 3,
  código_produto: 'MR2',
  quantidade_produto: 10,
  valor_unitário_produto: '17,30',
});

export const wrongLine = JSON.stringify({
  número_item: 3,
  código_produto: 'MR2',
  quantidade_produto: '10',
  valor_unitário_produto: '17,30',
});

export const lines = [line1, line2, line3];

export const outTodosPedidos = [
  {
    código_produto: 'K13',
    número_item: 2,
    quantidade_produto: 5,
    valor_unitário_produto: '15.00',
  },
  {
    código_produto: 'SD9',
    número_item: 4,
    quantidade_produto: 12,
    valor_unitário_produto: '5.00',
  },
  {
    código_produto: 'MR2',
    número_item: 3,
    quantidade_produto: 10,
    valor_unitário_produto: '17.30',
  }];

export const outAgruparTodosPedidos = [
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
  {
    número_item: 1,
    código_produto: 'HU5',
    quantidade_produto: 5,
    valor_unitário_produto: '33.00',
  },
];

export const outPedidos = [
  {
    id: '1',
    pedidos: [
      {
        código_produto: 'A22',
        número_item: 1,
        quantidade_produto: 9,
        valor_unitário_produto: '10.00',
      },
      {
        código_produto: 'K13',
        número_item: 2,
        quantidade_produto: 5,
        valor_unitário_produto: '15.00',
      },
      {
        código_produto: 'MR2',
        número_item: 3,
        quantidade_produto: 10,
        valor_unitário_produto: '17.30',
      },
      {
        código_produto: 'SD9',
        número_item: 4,
        quantidade_produto: 12,
        valor_unitário_produto: '5.00',
      }],
  },
  {
    id: '2',
    pedidos: [
      {
        código_produto: 'HU5',
        número_item: 1,
        quantidade_produto: 5,
        valor_unitário_produto: '33.00',
      },
      {
        código_produto: 'XK1',
        número_item: 2,
        quantidade_produto: 25,
        valor_unitário_produto: '20.00',
      },
      {
        código_produto: 'WF99',
        número_item: 3,
        quantidade_produto: 90,
        valor_unitário_produto: '1.70',
      }],
  }];

export const verifyTodosPedidos = [
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
  {
    número_item: 1,
    código_produto: 'HU5',
    quantidade_produto: 5,
    valor_unitário_produto: '33.00',
  },
];

export const wrongSequenceTodosPedidos = [
  {
    número_item: 2,
    código_produto: 'XK1',
    quantidade_produto: 25,
    valor_unitário_produto: '20.00',
  },
  {
    número_item: 4,
    código_produto: 'WF99',
    quantidade_produto: 90,
    valor_unitário_produto: '1.70',
  },
];

export const duplicateNumeroItem = {
  número_item: 2,
  código_produto: 'K13',
  quantidade_produto: 5,
  valor_unitário_produto: '15,00',
};

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
  {
    id: '3',
    pedidos: [
      {
        número_item: 1,
        código_produto: 'A99',
        quantidade_produto: 39,
        valor_unitário_produto: '10.00',
      },
      {
        número_item: 2,
        código_produto: 'M2',
        quantidade_produto: 15,
        valor_unitário_produto: '17.00',
      },
      {
        número_item: 3,
        código_produto: 'K73',
        quantidade_produto: 110,
        valor_unitário_produto: '15.00',
      },
      {
        número_item: 4,
        código_produto: 'SD9',
        quantidade_produto: 20,
        valor_unitário_produto: '5.40',
      },
      {
        número_item: 5,
        código_produto: 'D19',
        quantidade_produto: 6,
        valor_unitário_produto: '44.00',
      },
    ],
  },
  {
    id: '4',
    pedidos: [
      {
        número_item: 1,
        código_produto: 'SF49',
        quantidade_produto: 170,
        valor_unitário_produto: '5.30',
      },
      {
        número_item: 2,
        código_produto: 'VR5',
        quantidade_produto: 51,
        valor_unitário_produto: '90.00',
      },
      {
        número_item: 3,
        código_produto: 'BR1',
        quantidade_produto: 25,
        valor_unitário_produto: '23.00',
      },
    ],
  },
  {
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
        número_item: 4,
        código_produto: 'RR7',
        quantidade_produto: 21,
        valor_unitário_produto: '45.00',
      },
      {
        número_item: 5,
        código_produto: 'FM8',
        quantidade_produto: 6,
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
  },
];
