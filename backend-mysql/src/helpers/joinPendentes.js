function sumItensNota(pedidoNota) {
  const { ItensNota } = pedidoNota;
  const resultado = ItensNota.reduce((acc, cur) => {
    const index = acc.findIndex((item) => item.numeroItem === cur.numeroItem);
    if (index >= 0) {
      acc[index].quantidadeProduto += cur.quantidadeProduto;
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  return resultado;
}

function compareQuantidades(totalItensNota, pedidoNota) {
  console.log('🚀 ~ file: joinPendentes.js:17 ~ compareQuantidades ~ totalItensNota:', totalItensNota);
  console.log('🚀 ~ file: joinPendentes.js:17 ~ compareQuantidades ~ pedidoNota:', pedidoNota);
  const { ItensPedido } = pedidoNota;
  const itensPendentesPorPedido = [];

  // ItensPedido.forEach((itemPedido) => {
  //   console.log('🚀 ~ file: joinPendentes.js:21 ~ ItensPedido.forEach ~ itemPedido:', itemPedido);
  //   const itensPendentes = totalItensNota.find((p) => {
  //     const teste = p.numeroItem === itemPedido.numeroItem && p.idPedido === itemPedido.idPedido;
  //     console.log('🚀 ~ file: joinPendentes.js:24 ~ itensPendentes ~ p:', p);
  //     return teste;
  //   });

  //   if (!itensPendentes) {
  //     return null;
  //   }

  //   const diferenca = itemPedido.quantidade_produto - itensPendentes.totalQuantidade;
  //   if (diferenca > 0) {
  //     return { itensFaltantes: diferenca, ...itemPedido };
  //   } if (diferenca < 0) {
  //     throw new Error('Nota emitida com numero de quantidade maior do que o pedido');
  //   }
  // });

  // console.log(itensPendentesPorPedido);
}

function joinPendentes(result) {
  const totalItensNota = result.map((pedidoNota) => sumItensNota(pedidoNota));
  console.log('🚀 ~ file: joinPendentes.js:47 ~ joinPendentes ~ totalItensNota:', totalItensNota);

  // result.forEach((pedidoNota) => {
  //   totalItensNota.forEach((item) => {
  //     compareQuantidades(item, pedidoNota);
  //   });
  // });
}

module.exports = {
  joinPendentes,
  sumItensNota,
};
