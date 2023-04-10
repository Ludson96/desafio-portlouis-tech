const sinon = require('sinon');
const { expect } = require('chai');
const { Notas, ItensPedido } = require('../../../src/database/models');
const NotasService = require('../../../src/services/Notas.service');
const { newNota, outPayloadGetAllNotas, paramCreateNota, outCreate, outCreateNota, itemPedido } = require('../../../mocks/Notas.mock');

const notasService = new NotasService();

describe('Teste de unidade para notas service', function () {
  afterEach(sinon.restore);
  it('getAllNotas, deve retornar todas as notas', async function () {
    sinon.stub(Notas, 'findAll').resolves(newNota);

    const response = await notasService.getAllNotas();

    expect(response.type).equal(null);
    expect(response.payload).deep.equal(outPayloadGetAllNotas);
  });

  it('getAllNotas retorna NOT FOUND ao não encontrar a nota', async function () {
    sinon.stub(Notas, 'findAll').resolves([]);

    const response = await notasService.getAllNotas();

    expect(response.type).equal('NOT_FOUND');
    expect(response.payload).deep.equal([]);
  });

  it('createNota retorna nova nota criada', async function () {
    sinon.stub(Notas, 'create').resolves(outCreate);
    sinon.stub(ItensPedido, 'findOne').resolves(itemPedido);

    const response = await notasService.createNota(paramCreateNota);

    expect(response.type).equal(null);
    expect(response.payload).deep.equal(outCreateNota);
  });
});
