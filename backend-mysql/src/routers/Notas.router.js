const { Router } = require('express');
const { NotasController } = require('../controllers');
const { validInputNotas } = require('../middlewares');

const router = Router();

const notasController = new NotasController();

router.get('/', notasController.getAllNotas);

router.post('/', validInputNotas, notasController.createNota);

module.exports = router;