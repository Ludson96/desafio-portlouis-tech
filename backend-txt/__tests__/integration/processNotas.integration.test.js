import fs from 'fs';
import path from 'path';
import lerNotasDiretorio from '../../src/processNotas.js';
import { allNotas } from '../../mocks/processNotas.mock.js';

describe('Teste de integração processNotas', function () {
  it('se a função lerNotasDiretorio é executada com sucesso', async function () {
    const notasPath = path.join(__dirname, '../../src/data/Notas');
    const result = await lerNotasDiretorio(notasPath);

    const filePath = path.join(__dirname, '../../src/data/allNotas.txt');
    const isExist = fs.existsSync(filePath);

    const readAllNotas = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    expect(isExist).toBe(true);
    expect(readAllNotas).toStrictEqual(allNotas);
    expect(result).toStrictEqual(allNotas);
  });
});
