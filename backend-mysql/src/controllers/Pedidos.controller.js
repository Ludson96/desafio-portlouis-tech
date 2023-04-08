const fs = require('fs/promises');
const path = require('path');
const { PedidosService } = require('../services');
const getStatusCode = require('../helpers/htmlCodes');

module.exports = class PedidosController {
  constructor() {
    this.service = new PedidosService();
    this.getAllPedidos = this.getAllPedidos.bind(this);
    this.createPedido = this.createPedido.bind(this);
  }

  async getAllPedidos(_req, res) {
    try {
      const { type, payload } = await this.service.getAllPedidos();
      if (type) return res.status(getStatusCode(type)).json({ message: 'Pedido not found' });
      const filePath = path.join(__dirname, '../database/data/allPedidos.txt');
      fs.writeFile(filePath, JSON.stringify(payload, null, 2));
      return res.status(200).json(payload);
    } catch (erro) {
      return res.status(500).json({
        message: 'Erro sobre pedidos',
        error: erro.message,
      });
    }
  }

  async createPedido(req, res) {
    try {
      const content = req.body;
      const { type, payload } = await this.service.createPedido(content);
      if (type) return res.status(getStatusCode(type)).json({ message: 'Erro ao criar pedido' });
      return res.status(201).json(payload);
    } catch (erro) {
      return res.status(500).json({
        message: 'Erro sobre criação de pedido',
        error: erro.message,
      });
    }
  }
};
