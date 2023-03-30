const validNumAndCod = (pedido, id, linha) => {
  if (
    typeof pedido.número_item !== 'number'
    || !Number.isInteger(pedido.número_item)
    || pedido.número_item < 1
    || typeof pedido.código_produto !== 'string'
  ) {
    throw new Error(`Pedido inválido no arquivo ${id}: ${linha}`);
  }
};

const validQuantity = (pedido, id, linha) => {
  if (
    typeof pedido.quantidade_produto !== 'number'
    || !Number.isInteger(pedido.quantidade_produto)
    || pedido.quantidade_produto < 1
  ) {
    throw new Error(`Pedido inválido no arquivo ${id}: ${linha}`);
  }
};

const validUnit = (pedido, id, linha) => {
  const unitString = pedido.valor_unitário_produto.toFixed(2);
  if (
    typeof pedido.valor_unitário_produto !== 'number'
    || pedido.valor_unitário_produto < 1
    || !/^\d+(\.\d{1,2})?$/.test(unitString)
  ) {
    throw new Error(`Pedido inválido no arquivo ${id}: ${linha}`);
  }
};

function validInputs(pedido, id, linha) {
  validNumAndCod(pedido, id, linha);
  validQuantity(pedido, id, linha);
  validUnit(pedido, id, linha);
}

export default validInputs;