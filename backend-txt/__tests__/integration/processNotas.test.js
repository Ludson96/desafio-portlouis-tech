import fs from 'fs';
import path from 'path';
import * as processNotas from '../../src/processNotas.js';

describe('Arquivo processNotas', function () {
  it('Verificando se a função é executada com sucesso', async function () {
    await processNotas.lerNotasDiretorio('./mocks/Notas1');

    const filePath = path.join(process.cwd(), 'src', 'data', 'pedidosPendentes.txt');
    const fileExists = fs.existsSync(filePath);

    expect(fileExists).toBe(true);
  });

  // it('Verificando se as funções são chamadas corretamente', async function () {
  //   const allNotas = await processNotas.lerNotasDiretorio('./mocks/Notas1');
  // });
});
