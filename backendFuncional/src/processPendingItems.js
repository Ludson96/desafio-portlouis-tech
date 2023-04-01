import processPedidos from "./processPedidos.js"
import processNotas from "./processNotas.js"

export default async function processaItensPendentes() {
  const allPedidos = await processPedidos()
  const allNotas = await processNotas()

  const pedidos = [];
  allPedidos.forEach((p) => {
    allNotas.forEach((n) => {
      n.notas.filter((nota) => {
        if (nota.id_pedido === p.id) {
          pedidos.push(nota)
        }
      })
    })
  })

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
  
  const totalQuantidade = [];
  for (const [id_pedido, itens] of Object.entries(agrupadosPorPedido)) {
    for (const [chave, total] of Object.entries(itens)) {
      const [_, número_item] = chave.split('-');
      totalQuantidade.push({ id_pedido, número_item: Number(número_item), totalQuantidade: total });
    }
  }

  const pendentes = [];
  allPedidos.forEach((pedidos) => {
    totalQuantidade.forEach((nota) => {
      let diferenca = 0;
      if(pedidos.id === nota.id_pedido) {
        pedidos.pedidos.forEach((pedido) => {
          if(pedido.número_item === nota.número_item) {
            diferenca = pedido.quantidade_produto - nota.totalQuantidade
            if(diferenca > 0) {
              pendentes.push({ itensFaltantes: diferenca ,...nota })
            }
          }
        })
      }
    })
  })
  return pendentes
}
