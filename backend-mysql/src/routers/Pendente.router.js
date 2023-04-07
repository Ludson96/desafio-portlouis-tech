const { Router } = require('express');
const { PendenteController } = require('../controllers');

const router = Router();

const pendenteController = new PendenteController();

router.get('/', pendenteController.getPendentes);

module.exports = router;