import fs from 'fs';
import path from 'path';
import lerPedidosDiretorio from '../../src/processPedidos.js';
import { allPedidos } from '../../mocks/processPedidos.mock';

describe('Teste de integração processPedidos', function () {
  it('se a função lerPedidosDiretorio é executada com sucesso', async function () {
    const pedidosPath = path.join(__dirname, '../../src/data/Pedidos');
    const result = await lerPedidosDiretorio(pedidosPath);

    const filePath = path.join(__dirname, '../../src/data/allPedidos.txt');
    const isExist = fs.existsSync(filePath);

    const readAllPedidos = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    expect(isExist).toBe(true);
    expect(readAllPedidos).toStrictEqual(allPedidos);
    expect(result).toStrictEqual(allPedidos);
  });
});
