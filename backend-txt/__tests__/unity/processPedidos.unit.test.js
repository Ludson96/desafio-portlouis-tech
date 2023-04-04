import fs from 'fs';
import path from 'path';

import lerPedidosDiretorio, { addPedidos, agruparTodosPedidos } from '../../src/processPedidos';

import checkAscendingSequence from '../../src/helpers/checkAscendingSequence';
import validInputs from '../../src/helpers/validInputsPedidos';

import {
  duplicateNumeroItem,
  line1, line3, lines, outAgruparTodosPedidos, outPedidos, outTodosPedidos,
  verifyTodosPedidos, wrongLine, wrongSequenceTodosPedidos,
} from '../../mocks/processPedidos.mock';

describe('Teste de unidade processPedidos', function () {
  describe('Casos de sucesso', function () {
    let todosPedidos = [];
    beforeEach(function () {
      todosPedidos = [];
    });

    it('função addPedidos adiciona todos os pedidos em "todosPedidos"', async function () {
      lines.forEach((linha, index) => {
        addPedidos(linha, todosPedidos, index + 1, index);
      });

      expect(todosPedidos).toStrictEqual(outTodosPedidos);
    });

    it('função validInputs deve retornar true', function () {
      const pedido = JSON.parse(line1);

      pedido.valor_unitário_produto = parseFloat(pedido.valor_unitário_produto
        .replace(',', '.')).toFixed(2);

      const result = validInputs(pedido, 1, line1);

      expect(result).toBe(true);
    });

    it(
      'função agruparTodosPedidos retorna promise com todos os pedidos agrupadas',
      async function () {
        const filePath = path.join(__dirname, '../../mocks/Pedidos1/2.txt');
        const conteudo = fs.readFileSync(filePath, 'utf8');
        await agruparTodosPedidos(conteudo, todosPedidos, 2);

        expect(todosPedidos).toEqual(outAgruparTodosPedidos);
      },
    );

    it(
      'função agruparTodosPedidos retorna null nas linhas vazias',
      async function () {
        const filePath = path.join(__dirname, '../../mocks/Pedidos1/1.txt');
        const conteudo = fs.readFileSync(filePath, 'utf8');
        await agruparTodosPedidos(conteudo, todosPedidos, 2);

        expect(todosPedidos).toEqual([]);
      },
    );

    it('função lerPedidosDiretorio deve retornar todos os pedidos', async function () {
      const filePath = path.join(__dirname, '../../mocks/Pedidos2');
      const pedidos = await lerPedidosDiretorio(filePath);

      const isExist = fs.existsSync(filePath);

      expect(isExist).toBe(true);
      expect(pedidos).toStrictEqual(outPedidos);
    });

    it(
      'função checkAscendingSequence verifica se número_item está em ascendência',
      function () {
        const result = checkAscendingSequence(verifyTodosPedidos);

        expect(result).toBe(true);
      },
    );
  });

  describe('Casos de lançamento de exceção', function () {
    let todosPedidos;
    beforeEach(function () {
      todosPedidos = [duplicateNumeroItem];
    });
    it('função validInputs deve lançar uma exceção', function () {
      const pedido = JSON.parse(wrongLine);

      pedido.valor_unitário_produto = parseFloat(pedido.valor_unitário_produto
        .replace(',', '.')).toFixed(2);

      expect(() => validInputs(pedido, 1, line3))
        .toThrow(`Pedido inválido no arquivo 1: ${line3}.`
          + ' Erro: "quantidade_produto" must be a number');
    });

    it(
      'função checkAscendingSequence lança exceção se número_item não estiver crescente',
      function () {
        expect(() => checkAscendingSequence(wrongSequenceTodosPedidos))
          .toThrow('Número do item não segue sequência crescente');
      },
    );

    it(
      'função addPedidos lança exceção se número_item já existir para aquele pedido',
      function () {
        expect(() => addPedidos(line1, todosPedidos, 1, 0))
          .toThrow('Numero item já existe 1 do arquivo 1');
      },
    );
  });
});
