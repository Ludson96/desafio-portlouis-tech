const fs = require('fs/promises');
const path = require('path');
const { PendenteService } = require('../services');
const getStatusCode = require('../helpers/htmlCodes');

module.exports = class PendenteController {
  constructor() {
    this.service = new PendenteService();
    this.getPendentes = this.getPendentes.bind(this);
  }

  async getPendentes(_req, res) {
    try {
      const { type, payload } = await this.service.getPendentes();
      if (type) return res.status(getStatusCode(type)).json({ message: 'erro pendente not found' });
      const filePath = path.join(__dirname, '../database/data/pedidosPendentes.txt');
      fs.writeFile(filePath, JSON.stringify(payload, null, 2));
      return res.status(200).json(payload);
    } catch (erro) {
      return res.status(500).json({
        message: 'Erro sobre pendente',
        error: erro.message,
      });
    }
  }
};
