import PedidosService from '../services/Pedidos.service';
import getStatusCode from '../helpers/htmlCodes';

export default class PedidosController {
  constructor() {
    this.service = new PedidosService();
    this.getPedidos = this.getPedidos.bind(this);
  }

  async getPedidos(_req, res) {
    try {
      const { type, payload } = await this.service.getPedidos();
      if (type) return res.status(getStatusCode(type)).json({ message: 'Pedido not found' });
      return res.status(200).json(payload);
    } catch (erro) {
      return res.status(500).json({
        message: 'Erro sobre pedidos',
        error: erro.message,
      });
    }
  }
}
