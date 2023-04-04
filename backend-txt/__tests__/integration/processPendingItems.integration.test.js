import fs from 'fs';
import path from 'path';
import processaItensPendentes from '../../src/processPendingItems';
import { allPedidosPendentes } from '../../mocks/processPendingItems.mock';

describe('Teste de integração processPendingItems', function () {
  it('se a função processaItensPendentes é executada com sucesso', async function () {
    const result = await processaItensPendentes();

    const filePath = path.join(__dirname, '../../src/data/itensPendentes.txt');
    const isExist = fs.existsSync(filePath);

    const readItensPendentes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    expect(isExist).toBe(true);
    expect(readItensPendentes).toStrictEqual(allPedidosPendentes);
    expect(result).toStrictEqual(allPedidosPendentes);
  });
});
