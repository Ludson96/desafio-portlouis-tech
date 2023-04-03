import fs from 'fs';
import processaItensPendentes from './processPendingItems.js';
import processPedidos from './processPedidos.js';

async function getAllPedidosPendentes(allPedidos, itemsPendentes) {
  return Promise.all(
    allPedidos.map((pedidos) => {
      let id = 0;
      let valorTotal = 0;
      let valorTotalPendente = 0;
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
            valorTotal += pedido.quantidade_produto * pedido.valor_unitário_produto;
            valorTotalPendente += valorTotalPendenteUnitario;
          });
          id = pedidos.id;
        }
      });
      const allPendentes = {
        id,
        valor_total_pedido: parseFloat(valorTotal).toFixed(2),
        saldo_valor: parseFloat(valorTotalPendente).toFixed(2),
        pendentes,
      };
      return allPendentes;
    }),
  );
}

function filterPedidos(allPedidosPendentes) {
  return allPedidosPendentes.filter((pedido) => pedido.id !== 0);
}

function savePedidos(pendentesFiltered) {
  fs.writeFileSync('./src/data/pedidosPendentes.txt', JSON.stringify(pendentesFiltered, null, 2));
}

export default async function createFinalRelationship() {
  const allPedidos = await processPedidos();
  const itemsPendentes = await processaItensPendentes();
  const allPedidosPendentes = await getAllPedidosPendentes(allPedidos, itemsPendentes);
  const pendentesFiltered = filterPedidos(allPedidosPendentes);
  savePedidos(pendentesFiltered);
}

createFinalRelationship();
