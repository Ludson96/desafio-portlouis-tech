const fs = require('fs/promises');
const path = require('path');
const { NotasService } = require('../services');
const getStatusCode = require('../helpers/htmlCodes');

module.exports = class NotasController {
  constructor() {
    this.service = new NotasService();
    this.getAllNotas = this.getAllNotas.bind(this);
  }

  async getAllNotas(_req, res) {
    try {
      const { type, payload } = await this.service.getAllNotas();
      if (type) return res.status(getStatusCode(type)).json({ message: 'Nota not found' });
      const filePath = path.join(__dirname, '../database/data/allNotas.txt');
      fs.writeFile(filePath, JSON.stringify(payload, null, 2));
      return res.status(200).json(payload);
    } catch (erro) {
      return res.status(500).json({
        message: 'Erro sobre Nota',
        error: erro.message,
      });
    }
  }
};
