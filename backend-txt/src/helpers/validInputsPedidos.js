import Joi from 'joi';

const pedidoSchema = Joi.object({
  número_item: Joi.number().integer().min(1).required(),
  código_produto: Joi.string().required(),
  quantidade_produto: Joi.number().integer().min(1).strict()
    .required(),
  valor_unitário_produto: Joi.number().min(0.01).required(),
});

export default function validInputsPedidos(pedido, id, linha) {
  const { error } = pedidoSchema.validate(pedido);

  if (error) {
    throw new Error(`Pedido inválido no arquivo ${id}: ${linha}. Erro: ${error.message}`);
  }

  return true;
}