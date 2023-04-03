import fs from 'fs';
import path from 'path';
import { fail } from 'jest';
import lerNotasDiretorio from '../../src/processNotas.js';

describe('Testando arquivo processNotas', function () {
  describe('Testando casos de sucesso', function () {
    it('se a função é executada com sucesso', async function () {
      const notasPath = path.join(process.cwd(), 'src', 'data', 'Notas');
      await lerNotasDiretorio(notasPath);

      const filePath = path.join(process.cwd(), 'src', 'data', 'allNotas.txt');
      const fileExists = fs.existsSync(filePath);

      expect(fileExists).toBe(true);
    });
  });

  describe('Testando casos de erro', function () {
    it('deve lançar uma exceção', async function () {
      try {
        await lerNotasDiretorio();
        fail('A função deveria lançar uma exceção');
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });
  });
});
