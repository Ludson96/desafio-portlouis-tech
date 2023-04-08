const { Router } = require('express');
const { NotasController } = require('../controllers');

const router = Router();

const notasController = new NotasController();

router.get('/', notasController.getAllNotas);

router.post('/', notasController.createNota);

module.exports = router;