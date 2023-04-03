import Joi from 'joi';

const notasSchema = Joi.object({
  id_pedido: Joi.string().required(),
  número_item: Joi.number().integer().min(1).required(),
  quantidade_produto: Joi.number().integer().min(1).required(),
});

export default function validInputsNotas(notas, id, linha) {
  const { error } = notasSchema.validate(notas);

  if (error) {
    throw new Error(`Nota inválida no arquivo ${id}: ${linha}. Erro: ${error.message}`);
  }
}