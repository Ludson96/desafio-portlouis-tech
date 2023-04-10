const sinon = require('sinon');
const { expect } = require('chai');
const { Pedidos } = require('../../../src/database/models');
const PedidosService = require('../../../src/services/Pedidos.service');
const { pedido, outPayloadGetAllPedidos, newPedido, inputNewPedido, outCreatePedido } = require('../../../mocks/Pedidos.mock')
const pedidosService = new PedidosService();

describe('Teste de unidade para pedidos service', function () {
  afterEach(sinon.restore);
  it('getAllPedidos, deve retornar todas os pedidos', async function () {
    sinon.stub(Pedidos, 'findAll').resolves(pedido);

    const response = await pedidosService.getAllPedidos();

    expect(response.type).equal(null);
    expect(response.payload).deep.equal(outPayloadGetAllPedidos);
  });

  it('getAllPedidos retorna NOT FOUND ao não encontrar um pedido', async function () {
    sinon.stub(Pedidos, 'findAll').resolves([]);

    const response = await pedidosService.getAllPedidos();

    expect(response.type).equal('NOT_FOUND');
    expect(response.payload).deep.equal([]);
  });

  it('createPedido retorna novo pedido criado', async function () {
    sinon.stub(Pedidos, 'create').resolves(newPedido);

    const response = await pedidosService.createPedido(inputNewPedido);
    console.log("🚀 ~ file: Pedidos.service.unit.test.js:32 ~ response:", response)

    expect(response.type).equal(null);
    expect(response.payload).deep.equal(outCreatePedido);
  });
});
