const { Router } = require('express');
const { NotasController } = require('../controllers');

const router = Router();

const notasController = new NotasController();

router.get('/', notasController.getAllNotas);

module.exports = router;