import fs from 'fs';
import processPedidos from './processPedidos.js';
import processNotas from './processNotas.js';

export function agruparPorPedido(pedidos) {
  const agrupadosPorPedido = pedidos.reduce((acc, pedido) => {
    const { id_pedido, número_item, quantidade_produto } = pedido;
    const chave = `${id_pedido}-${número_item}`;
    if (acc[id_pedido]) {
      acc[id_pedido][chave] = (acc[id_pedido][chave] || 0) + quantidade_produto;
    } else {
      acc[id_pedido] = { [chave]: quantidade_produto };
    }
    return acc;
  }, {});
  return agrupadosPorPedido;
}

export function getTotalQuantidade(agrupadosPorPedido) {
  const totalQuantidade = Object.entries(agrupadosPorPedido)
    .flatMap(([id_pedido, itens]) => Object.entries(itens)
      .map(([chave, total]) => {
        const número_item = chave.split('-')[1];
        return {
          id_pedido,
          número_item: Number(número_item),
          totalQuantidade: total,
        };
      }));

  return totalQuantidade;
}

export function compareQuantidades(pedido, nota) {
  const itemPedido = pedido.pedidos.find((p) => p.número_item === nota.número_item);
  if (!itemPedido) {
    return null;
  }

  const diferenca = itemPedido.quantidade_produto - nota.totalQuantidade;
  if (diferenca > 0) {
    return { itensFaltantes: diferenca, ...nota };
  } if (diferenca < 0) {
    throw new Error('Nota emitida com numero de quantidade maior do que o pedido');
  } else {
    return null;
  }
}

export function getPendentes(allPedidos, totalQuantidade, pendentes) {
  allPedidos.forEach((pedido) => {
    totalQuantidade.forEach((nota) => {
      if (pedido.id === nota.id_pedido) {
        const diferenca = compareQuantidades(pedido, nota);
        if (diferenca) {
          pendentes.push(diferenca);
        }
      }
    });
  });
}

export default async function processaItensPendentes() {
  const allPedidos = await processPedidos('./src/data/Pedidos');
  const allNotas = await processNotas('./src/data/Notas');

  const pedidos = [];
  allPedidos.forEach((p) => {
    allNotas.forEach((n) => {
      n.notas.forEach((nota) => {
        if (nota.id_pedido === p.id) {
          pedidos.push(nota);
        }
      });
    });
  });

  const agrupadosPorPedido = agruparPorPedido(pedidos);

  const totalQuantidade = getTotalQuantidade(agrupadosPorPedido);

  const pendentes = [];
  getPendentes(allPedidos, totalQuantidade, pendentes);
  fs.writeFileSync('./src/data/itensPendentes.txt', JSON.stringify(pendentes, null, 2));
  return pendentes;
}
