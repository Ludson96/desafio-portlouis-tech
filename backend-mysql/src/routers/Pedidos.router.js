import { Router } from 'express';
import { PedidosController } from '../controllers';

const router = Router();

const pedidosController = new PedidosController();

router.get('/', pedidosController.getPedidos);

export default router;