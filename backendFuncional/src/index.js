import processaItensPendentes from "./processPendingItems.js";
import processPedidos from "./processPedidos.js"

async function createFinalRelationship() {
  const allPedidos = await processPedidos();
  const itemsPendentes = await processaItensPendentes();

  const result = [];
  allPedidos.forEach((pedidos) => {
    itemsPendentes.forEach((pendente) => {
      if (pendente.id_pedido === pedidos.id) {
        let valorTotalUnitario = 0;
        let valorTotalPendente = 0;
        pedidos.pedidos.forEach((pedido) => {
          if (pendente.número_item === pedido.número_item) {
            valorTotalUnitario = pedido.quantidade_produto * pedido.valor_unitário_produto;
            valorTotalPendente = pendente.itensFaltantes * pedido.valor_unitário_produto;
            result.push({
              id: pendente.id_pedido,
              pendentes: [{
                número_item: pedido.número_item,
                código_produto: pedido.código_produto,
                valor_unitário_produto: pedido.valor_unitário_produto,
                quantidade_faltante: pendente.itensFaltantes,
                valor_total_unitário: parseFloat(valorTotalUnitario).toFixed(2),
                valor_total_pendente: parseFloat(valorTotalPendente).toFixed(2),
              }]
            });
          }
        })
      }
    })
  })
  console.log("🚀 ~ file: index.js:9 ~ createFinalRelationship ~ result:", result[1])
}

createFinalRelationship();
