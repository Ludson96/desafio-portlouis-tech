async function getAllPedidosPendentes(allPedidos, itemsPendentes) {
  return Promise.all(
    allPedidos.map((pedidos) => {
      let id = 0;
      const pendentes = [];
      itemsPendentes.forEach((pendente) => {
        if (pendente.id_pedido === pedidos.id) {
          let valorTotalUnitario = 0;
          let valorTotalPendenteUnitario = 0;
          pedidos.pedidos.forEach((pedido) => {
            if (pendente.número_item === pedido.número_item) {
              valorTotalUnitario = pedido.quantidade_produto * pedido.valor_unitário_produto;
              valorTotalPendenteUnitario = pendente.itensFaltantes * pedido.valor_unitário_produto;
              pendentes.push({
                número_item: pedido.número_item,
                código_produto: pedido.código_produto,
                valor_unitário_produto: pedido.valor_unitário_produto,
                quantidade_faltante: pendente.itensFaltantes,
                valor_total_unitário: parseFloat(valorTotalUnitario).toFixed(2),
                valor_total_pendente: parseFloat(valorTotalPendenteUnitario).toFixed(2),
              });
            }
          });
          id = pedidos.id;
        }
      });
      const allPendentes = {
        id,
        pendentes,
      };
      return allPendentes;
    }),
  );
}

const allPedidos = [
  {
    id: '3',
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

  },
];

const itemsPendentes = [
  {
    itensFaltantes: 4,
    id_pedido: '3',
    número_item: 2,
    totalQuantidade: 11,
  },
  {
    itensFaltantes: 5,
    id_pedido: '3',
    número_item: 3,
    totalQuantidade: 105,
  },
  {
    itensFaltantes: 27,
    id_pedido: '3',
    número_item: 1,
    totalQuantidade: 12,
  },
];

function calcularValorTotalPedido(pedido) {
  return pedido.pedidos.reduce((total, item) => total + (parseFloat(item.valor_unitário_produto) * item.quantidade_produto), 0);
}

function calcularValorTotalPedidos(allPedidos) {
  return allPedidos.map((pedido) => {
    const valorTotalPedido = calcularValorTotalPedido(pedido);
    return {
      id: pedido.id,
      valor_total_pedido: valorTotalPedido.toFixed(2),
      pedidos: pedido.pedidos,
    };
  });
}

function listarPedidosPendentes(allPedidos, allItensPendentes) {
  const menorTamanho = Math.min(allPedidos.length, allItensPendentes.length);
  return allPedidos.slice(0, menorTamanho).map((pedido, index) => {
    const itensPendentes = allItensPendentes[index].pendentes;
    const saldoValor = itensPendentes.reduce((total, item) => total + parseFloat(item.valor_total_pendente), 0);
    return {
      id: pedido.id,
      saldo_valor: saldoValor.toFixed(2),
      pendentes: itensPendentes,
    };
  });
}

async function teste1() {
  const allItensPendentes = await getAllPedidosPendentes(allPedidos, itemsPendentes);
  const valorTotalPedidos = calcularValorTotalPedidos(allPedidos);
  const pedidosPendentes = listarPedidosPendentes(allPedidos, allItensPendentes);

  const resultado = valorTotalPedidos.map((valorTotal, index) => {
    const pendentes = pedidosPendentes[index];
    return {
      id: valorTotal.id,
      valor_total_pedido: valorTotal.valor_total_pedido,
      saldo_valor: pendentes.saldo_valor,
    };
  }).reduce((total, pedido) => {
    total.valor_total_pedido += parseFloat(pedido.valor_total_pedido);
    total.saldo_valor += parseFloat(pedido.saldo_valor);
    return total;
  }, { valor_total_pedido: 0, saldo_valor: 0 });

  console.log(resultado);
}

teste1();
