import { addNotas } from '../../src/processNotas.js';
import { linhas, outputTodasNotas, todasNotas } from '../../mocks/processNotas.mock.js';

describe('Teste de unidade processNotas', function () {
  describe('Casos de sucesso', function () {
    it('função addNotas', async function () {
      linhas.forEach((linha, index) => {
        addNotas(linha, index + 1, todasNotas);
      });

      expect(todasNotas).toStrictEqual(outputTodasNotas);
    });
  });
});
