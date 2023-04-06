const express = require('express');
const { LoginRouter, ProductRouter, SaleRouter, AdminRouter } = require('../routers');

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
const { P } = require('../routers');

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

module.exports = app;
