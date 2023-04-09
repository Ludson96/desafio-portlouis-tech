const ajv = require('ajv')();
const notaSchema = require('./schemas/notasSchema');

module.exports = (req, _res, next) => {
  const content = req.body;
  const isValid = ajv.validate(notaSchema, content, { coerceTypes: false });

  if (!isValid) {
    const errors = ajv.errorsText(); // coletando informações de erro do AJV
    const error = new Error(`Pedido em um formato inválido: ${errors}`);
    error.statusCode = 400;
    return next(error);
  }
  return next();
};
