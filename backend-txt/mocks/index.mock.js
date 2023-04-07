export const allPedidos = [
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
];

export const itemsPendentes = [
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

export const outGetAllPedidosPendentes = [
  {
    id: '3',
    pendentes: [
      {
        código_produto: 'A99',
        número_item: 1,
        quantidade_faltante: 27,
        valor_total_pendente: '270.00',
        valor_total_unitário: '390.00',
        valor_unitário_produto: '10.00',
      },
      {
        código_produto: 'M2',
        número_item: 2,
        quantidade_faltante: 4,
        valor_total_pendente: '68.00',
        valor_total_unitário: '255.00',
        valor_unitário_produto: '17.00',
      },
      {
        código_produto: 'K73',
        número_item: 3,
        quantidade_faltante: 5,
        valor_total_pendente: '75.00',
        valor_total_unitário: '1650.00',
        valor_unitário_produto: '15.00',
      },
    ],
    saldo_valor: '413.00',
    valor_total_pedido: '2667.00',
  },
];

export const pedidosPendentes = [
  {
    id: '3',
    pendentes: [
      {
        código_produto: 'A99',
        número_item: 1,
        quantidade_faltante: 27,
        valor_total_pendente: '270.00',
        valor_total_unitário: '390.00',
        valor_unitário_produto: '10.00',
      },
      {
        código_produto: 'M2',
        número_item: 2,
        quantidade_faltante: 4,
        valor_total_pendente: '68.00',
        valor_total_unitário: '255.00',
        valor_unitário_produto: '17.00',
      },
      {
        código_produto: 'K73',
        número_item: 3,
        quantidade_faltante: 5,
        valor_total_pendente: '75.00',
        valor_total_unitário: '1650.00',
        valor_unitário_produto: '15.00',
      },
    ],
    saldo_valor: '413.00',
    valor_total_pedido: '2667.00',
  },
  {
    id: 0,
    pendentes: [],
    saldo_valor: '0.00',
    valor_total_pedido: '0.00',
  },
  {
    id: 0,
    pendentes: [],
    saldo_valor: '0.00',
    valor_total_pedido: '0.00',
  },
];

export const allPedidosPendentes = [
  {
    id: '3',
    valor_total_pedido: '2667.00',
    saldo_valor: '413.00',
    pendentes: [
      {
        número_item: 1,
        código_produto: 'A99',
        valor_unitário_produto: '10.00',
        quantidade_faltante: 27,
        valor_total_unitário: '390.00',
        valor_total_pendente: '270.00',
      },
      {
        número_item: 2,
        código_produto: 'M2',
        valor_unitário_produto: '17.00',
        quantidade_faltante: 4,
        valor_total_unitário: '255.00',
        valor_total_pendente: '68.00',
      },
      {
        número_item: 3,
        código_produto: 'K73',
        valor_unitário_produto: '15.00',
        quantidade_faltante: 5,
        valor_total_unitário: '1650.00',
        valor_total_pendente: '75.00',
      },
    ],
  },
  {
    id: '5',
    valor_total_pedido: '2400.00',
    saldo_valor: '450.90',
    pendentes: [
      {
        número_item: 1,
        código_produto: 'AM9',
        valor_unitário_produto: '10.00',
        quantidade_faltante: 3,
        valor_total_unitário: '660.00',
        valor_total_pendente: '30.00',
      },
      {
        número_item: 4,
        código_produto: 'RR7',
        valor_unitário_produto: '45.00',
        quantidade_faltante: 9,
        valor_total_unitário: '945.00',
        valor_total_pendente: '405.00',
      },
      {
        número_item: 6,
        código_produto: 'YY6',
        valor_unitário_produto: '15.90',
        quantidade_faltante: 1,
        valor_total_unitário: '159.00',
        valor_total_pendente: '15.90',
      },
    ],
  },
];