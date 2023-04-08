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

export function compareQuantidades(notasTotalQuantidade, pedido) {
  const itemNota = notasTotalQuantidade.find((nota) =>
    nota.número_item === pedido.número_item && nota.id_pedido === pedido.id_pedido);
  if (!itemNota) {
    return { itensFaltantes: pedido.quantidade_produto, ...pedido };
  }

  const diferenca = pedido.quantidade_produto - itemNota.totalQuantidade;
  if (diferenca > 0) {
    return { itensFaltantes: diferenca, ...pedido };
  } if (diferenca < 0) {
    throw new Error('Nota emitida com numero de quantidade maior do que o pedido');
  }
}

export function getPendentes(pedidos, notasTotalQuantidade) {
  const itensPendentesComNull = [];
  pedidos.forEach((pedido) => {
    const itemPendente = compareQuantidades(notasTotalQuantidade, pedido);
    itensPendentesComNull.push(itemPendente);
  });
  const itensPendentes = itensPendentesComNull.filter(Boolean);
  return itensPendentes;
}

export function agrupaArrayPedidos(array) {
  const pedidos = [];
  array.forEach((p) => {
    p.pedidos.forEach((pedido) => {
      pedidos.push(pedido);
    });
  });
  return pedidos;
}

export function agrupaArrayNotas(array) {
  const notas = [];
  array.forEach((p) => {
    p.notas.forEach((pedido) => {
      notas.push(pedido);
    });
  });

  return notas;
}

export default async function processaItensPendentes() {
  const allPedidos = await processPedidos('./src/data/Pedidos');
  const allNotas = await processNotas('./src/data/Notas');

  const notas = agrupaArrayNotas(allNotas);

  const agrupadosPorPedido = agruparPorPedido(notas);

  const notasTotalQuantidade = getTotalQuantidade(agrupadosPorPedido);

  const pedidos = agrupaArrayPedidos(allPedidos);
  const itensPendentes = getPendentes(pedidos, notasTotalQuantidade);
  fs.writeFileSync('./src/data/itensPendentes.txt', JSON.stringify(itensPendentes, null, 2));
  return itensPendentes;
}
