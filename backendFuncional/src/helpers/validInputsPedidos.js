import Joi from 'joi';

const pedidoSchema = Joi.object({
  número_item: Joi.number().integer().min(1).required(),
  código_produto: Joi.string().required(),
  quantidade_produto: Joi.number().integer().min(1).required(),
  valor_unitário_produto: Joi.number().min(0.01).required(),
});

export default function validInputs(pedido, id, linha) {
  const { error } = pedidoSchema.validate(pedido);

  if (error) {
    console.error(`Pedido inválido no arquivo ${id}: ${linha}. Erro: ${error.message}`);
  }
}

// const validNumAndCod = (pedido, id, linha) => {
//   if (
//     typeof pedido.número_item !== 'number'
//     || !Number.isInteger(pedido.número_item)
//     || pedido.número_item < 1
//     || typeof pedido.código_produto !== 'string'
//   ) {
//     console.error(`Pedido inválido no arquivo ${id}: ${linha}`);
//   }
// };

// const validQuantity = (pedido, id, linha) => {
//   if (
//     typeof pedido.quantidade_produto !== 'number'
//     || !Number.isInteger(pedido.quantidade_produto)
//     || pedido.quantidade_produto < 1
//   ) {
//     console.error(`Pedido inválido no arquivo ${id}: ${linha}`);
//   }
// };

// const validUnit = (pedido, id, linha) => {
//   const unitString = pedido.valor_unitário_produto.toFixed(2);
//   if (
//     typeof pedido.valor_unitário_produto !== 'number'
//     || pedido.valor_unitário_produto < 1
//     || !/^\d+(\.\d{1,2})?$/.test(unitString)
//   ) {
//     console.error(`Pedido inválido no arquivo ${id}: ${linha}`);
//   }
// };

// export default function validInputs(pedido, id, linha) {
//   validNumAndCod(pedido, id, linha);
//   validQuantity(pedido, id, linha);
//   validUnit(pedido, id, linha);
// }
