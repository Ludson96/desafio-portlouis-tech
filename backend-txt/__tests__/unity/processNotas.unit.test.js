import fs from 'fs';
import path from 'path';

import verificarDuplicatas from '../../src/helpers/validIdAndNum';
import lerNotasDiretorio, { addNotas, agruparTodasNotas } from '../../src/processNotas.js';
import validInputsNotas from '../../src/helpers/validInputsNotas.js';
import {
  linha1,
  linhas,
  outAgruparTodasNotas,
  outNotas,
  outputTodasNotas,
  verifyNotas,
  wrongLine,
  wrongVerifyNotas,
} from '../../mocks/processNotas.mock.js';

describe('Teste de unidade processNotas', function () {
  describe('Casos de sucesso', function () {
    let todasNotas = [];
    beforeEach(function () {
      todasNotas = [];
    });

    it('função addNotas adiciona todas as notas em "todasNotas"', async function () {
      linhas.forEach((linha, index) => {
        addNotas(linha, index + 1, todasNotas);
      });

      expect(todasNotas).toStrictEqual(outputTodasNotas);
    });

    it('função validInputsNotas deve retornar true', function () {
      const nota = JSON.parse(linha1);

      nota.id_pedido = nota.id_pedido.toString();

      const result = validInputsNotas(nota, 1, linha1);

      expect(result).toBe(true);
    });

    it('função agruparTodasNotas retorna promise com todas as notas agrupadas', async function () {
      const filePath = path.join(__dirname, '../../mocks/Notas1/2.txt');
      const conteudo = fs.readFileSync(filePath, 'utf8');
      await agruparTodasNotas(conteudo, 2, todasNotas);

      expect(todasNotas).toEqual(outAgruparTodasNotas);
    });

    it(
      'função agruparTodasNotas retorna null nas linhas vazias',
      async function () {
        const filePath = path.join(__dirname, '../../mocks/Notas1/1.txt');
        const conteudo = fs.readFileSync(filePath, 'utf8');
        await agruparTodasNotas(conteudo, todasNotas, 2);

        expect(todasNotas).toEqual([]);
      },
    );

    it('função lerNotasDiretorio deve retornar todas as notas', async function () {
      const filePath = path.join(__dirname, '../../mocks/Notas2');
      const notas = await lerNotasDiretorio(filePath);

      const isExist = fs.existsSync(filePath);

      expect(isExist).toBe(true);
      expect(notas).toStrictEqual(outNotas);
    });

    it(
      'função verificarDuplicatas verifica se não existe par de id_pedido e número_item',
      function () {
        const result = verificarDuplicatas(verifyNotas);

        expect(result).toBe(false);
      },
    );
  });

  describe('Casos de erro', function () {
    it('função validInputsNotas deve lançar uma exceção', function () {
      const nota = JSON.parse(wrongLine);

      nota.id_pedido = nota.id_pedido.toString();

      expect(() => validInputsNotas(nota, 1, linha1))
        .toThrow(`Nota inválida no arquivo 1: ${linha1}. Erro: "número_item" must be a number`);
    });

    it(
      'função verificarDuplicatas lança exceção ao encontrar par de id_pedido e número_item',
      function () {
        expect(() => verificarDuplicatas(wrongVerifyNotas))
          .toThrow('Par de id_pedido e número_item já existe');
      },
    );
  });
});
