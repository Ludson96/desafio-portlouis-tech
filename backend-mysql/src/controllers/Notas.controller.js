const fs = require('fs/promises');
const path = require('path');
const { NotasService } = require('../services');
const getStatusCode = require('../helpers/htmlCodes');

module.exports = class NotasController {
  constructor() {
    this.service = new NotasService();
    this.getAllNotas = this.getAllNotas.bind(this);
    this.createNota = this.createNota.bind(this);
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

  async createNota(req, res) {
    try {
      const content = req.body;
      const { type, payload } = await this.service.createNota(content);
      if (type) return res.status(getStatusCode(type)).json({ message: 'Erro ao criar nota' });
      return res.status(201).json(payload);
    } catch (erro) {
      return res.status(500).json({
        message: 'Erro sobre criação de nota',
        error: erro.message,
      });
    }
  }
};
