import fs from 'fs';
import processaItensPendentes from './processPendingItems.js';
import processPedidos from './processPedidos.js';

export async function getAllPedidosPendentes(allPedidos, itemsPendentes) {
  return Promise.all(
    allPedidos.map((pedidos) => {
      const { id } = pedidos;
      let valorTotal = 0;
      let valorTotalPendente = 0;
      const pendentes = [];
      for (let i = 0; i < pedidos.pedidos.length; i += 1) {
        const pedido = pedidos.pedidos[i];
        const valorTotalUnitario = pedido.quantidade_produto * pedido.valor_unitário_produto;
        valorTotal += valorTotalUnitario;
        for (let j = 0; j < itemsPendentes.length; j += 1) {
          const pendente = itemsPendentes[j];
          if (pendente.id_pedido === id && pendente.número_item === pedido.número_item) {
            const valorTotalPendenteUnitario = pendente.itensFaltantes * pedido.valor_unitário_produto;
            valorTotalPendente += valorTotalPendenteUnitario;
            pendentes.push({
              número_item: pedido.número_item,
              código_produto: pedido.código_produto,
              valor_unitário_produto: pedido.valor_unitário_produto,
              quantidade_faltante: pendente.itensFaltantes,
              valor_total_unitário: parseFloat(valorTotalUnitario).toFixed(2),
              valor_total_pendente: parseFloat(valorTotalPendenteUnitario).toFixed(2),
            });
          }
        }
      }
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

export function filterPedidos(allPedidosPendentes) {
  return allPedidosPendentes.filter((pedido) => pedido.saldo_valor !== '0.00');
}

export function savePedidos(pendentesFiltered) {
  fs.writeFileSync('./src/data/pedidosPendentes.txt', JSON.stringify(pendentesFiltered, null, 2));
}

export default async function createFinalRelationship() {
  const allPedidos = await processPedidos('./src/data/Pedidos');
  const itemsPendentes = await processaItensPendentes();
  const allPedidosPendentes = await getAllPedidosPendentes(allPedidos, itemsPendentes);
  const pendentesFiltered = filterPedidos(allPedidosPendentes);
  savePedidos(pendentesFiltered);
  console.log('🚀 ~ file: index.js:62 ~ createFinalRelationship ~ pendentesFiltered:', pendentesFiltered);
  return pendentesFiltered;
}

createFinalRelationship();
