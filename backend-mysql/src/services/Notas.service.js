const SuperService = require('./SuperService');
const { Notas, ItensNota } = require('../database/models');

module.exports = class NotasService extends SuperService {
  constructor() {
    super(Notas);
  }

  async getAllNotas() {
    const result = await super.findAll({
      include: [{
        model: ItensNota,
        as: 'ItensNota',
      }],
      subQuery: false,
    });

    if (result.length === 0) return { type: 'NOT_FOUND', payload: result };

    return { type: null, payload: result };
  }
};