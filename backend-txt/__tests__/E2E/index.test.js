import fs from 'fs';
import path from 'path';
import createFinalRelationship from '../../src/index.js';
import { allPedidosPendentes } from '../../mocks/index.mock';

describe('Testando a aplicação completa', function () {
  it('Verifica se critou o arquivo de texto corretamente e seu resultado final', async function () {
    const result = await createFinalRelationship();
    const filePath = path.join(__dirname, '../../src/data/pedidosPendentes.txt');
    const isExist = fs.existsSync(filePath);

    const readPedidosPendentes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    expect(isExist).toBe(true);
    expect(readPedidosPendentes).toStrictEqual(allPedidosPendentes);
    expect(result).toStrictEqual(allPedidosPendentes);
  });
});
