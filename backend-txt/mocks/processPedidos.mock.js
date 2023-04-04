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
