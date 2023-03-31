// import processPedidos from "./processPedidos.js"
// import processNotas from "./processNotas.js"

async function processaItensPendentes() {
  // const allPedidos = await processPedidos()
  // const allNotas = await processNotas()
  const allPedidos = [
    {
      id: '1',
      pedidos: [
        {
          'número_item': 1,
          'código_produto': 'A22',
          quantidade_produto: 9,
          'valor_unitário_produto': '10.00'
        },
        {
          'número_item': 2,
          'código_produto': 'K13',
          quantidade_produto: 5,
          'valor_unitário_produto': '15.00'
        },
        {
          'número_item': 3,
          'código_produto': 'MR2',
          quantidade_produto: 10,
          'valor_unitário_produto': '17.30'
        },
        {
          'número_item': 4,
          'código_produto': 'SD9',
          quantidade_produto: 12,
          'valor_unitário_produto': '5.00'
        }
      ]
    },
  ];
  const allNotas = [
    {
      id: '1',
      notas: [
        { id_pedido: '1', 'número_item': 4, quantidade_produto: 4 },
        { id_pedido: '1', 'número_item': 2, quantidade_produto: 5 }
      ]
    }
  ];

  const pedidosPendentes = [];
  allPedidos.forEach((pedido) => {
    const totalPorItem = {};
    pedido.pedidos.forEach((item) => {
      totalPorItem[item['número_item']] = 0; // Inicializa o total para cada item como zero
    });

    allNotas.forEach((notas) => {
      if (pedido.id === notas.id) {
        notas.notas.forEach((nota) => {
          pedido.pedidos.forEach((item) => {
            if (nota.número_item === item['número_item']) {
              totalPorItem[nota.número_item] += nota.quantidade_produto;
            }
          });
        });
      }
    });

    pedido.pedidos.forEach((item) => {
      const totalItem = totalPorItem[item['número_item']];
      if (totalItem < item.quantidade_produto) {
        pedidosPendentes.push(pedido)
      } else if (totalItem > item.quantidade_produto) {
        throw new Error(`O item: ${item} tem quantidade maior que na nota`)
      }
    });
  });

  return pedidosPendentes;
}

const pendentes = processaItensPendentes();
// console.log('pendentes: ', pendentes);
