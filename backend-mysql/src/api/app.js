const express = require('express');
const { PedidosRouter, NotasRouter } = require('../routers');

const app = express();

app.use('/pedido', PedidosRouter);

app.use('/nota', NotasRouter);

module.exports = app;
