function verifyValidPedidos(pedido, id, linha) {
  if (
    typeof pedido.número_item !== 'number'
    || pedido.número_item < 1
    || typeof pedido.código_produto !== 'string'
    || typeof pedido.quantidade_produto !== 'number'
    || typeof pedido.valor_unitário_produto !== 'string'
  ) {
    throw new Error(`Pedido inválido no arquivo ${id}: ${linha}`);
  }
}