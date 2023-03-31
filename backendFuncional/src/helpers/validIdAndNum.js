import lerPedidosDiretorio from '../processPedidos'

export default async function validIdAndNum(todasNotas, nota, id, index) {
  const allPedidos = await lerPedidosDiretorio()

  if (todasNotas.some(item => item.id_pedido === nota.id_pedido)) {
    throw new Error(`id_pedido já existe ${index + 1} do arquivo ${id}`);
  }

  if (todasNotas.some(item => item.número_item !== allPedidos.número_item)) {
    throw new Error(`número_item inexistente ${index + 1} do arquivo ${id}`);
  }
  
}