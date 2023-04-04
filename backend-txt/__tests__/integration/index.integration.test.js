import fs from 'fs';
import path from 'path';
import createFinalRelationship from '../../src';
import { allPedidosPendentes } from '../../mocks/index.mock';

describe('Teste de integração index', function () {
  it('se a função createFinalRelationship é executada com sucesso', async function () {
    const result = await createFinalRelationship();

    const filePath = path.join(__dirname, '../../src/data/pedidosPendentes.txt');
    const isExist = fs.existsSync(filePath);

    const readPedidosPendentes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    expect(isExist).toBe(true);
    expect(readPedidosPendentes).toStrictEqual(allPedidosPendentes);
    expect(result).toStrictEqual(allPedidosPendentes);
  });
});
