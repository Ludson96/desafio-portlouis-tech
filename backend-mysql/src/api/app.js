const express = require('express');
const { PedidosRouter, NotasRouter, PendenteRouter } = require('../routers');

const app = express();

app.use('/pedido', PedidosRouter);

app.use('/nota', NotasRouter);

app.use('/pendente', PendenteRouter);

module.exports = app;
