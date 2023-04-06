import { SuperService } from './SuperService';
import { Pedidos } from '../database/models';

export default class PedidosService extends SuperService {
  constructor() {
    super(Pedidos);
  }

  async getProducts(obj) {
    const result = await super.findAll(obj);

    if (result.length === 0) return { type: 'NOT_FOUND', payload: result };

    return { type: null, payload: result };
  }
}
