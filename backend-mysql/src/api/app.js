const express = require('express');
const { PedidosRouter } = require('../routers');

const app = express();

app.use('/pedido', PedidosRouter);

module.exports = app;
