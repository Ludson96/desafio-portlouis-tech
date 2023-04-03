import fs from 'fs';
import path from 'path';
import createFinalRelationship from '../../src/index.js';

describe('Testando criação de arquivo', function () {
  it('deve criar um arquivo na localização desejada', function () {
    createFinalRelationship();

    const filePath = path.join(process.cwd(), 'src', 'data', 'pedidosPendentes.txt');
    const fileExists = fs.existsSync(filePath);

    expect(fileExists).toBe(true);
  });
});
