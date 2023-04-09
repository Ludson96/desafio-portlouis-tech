const { Router } = require('express');
const { PedidosController } = require('../controllers');
const { validInputPedidos } = require('../middlewares');

const router = Router();

const pedidosController = new PedidosController();

router.get('/', pedidosController.getAllPedidos);

router.post('/', validInputPedidos, pedidosController.createPedido);

module.exports = router;