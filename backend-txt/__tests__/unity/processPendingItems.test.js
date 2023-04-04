import processaItensPendentes, {
  agruparPorPedido, compareQuantidades, getPendentes, getTotalQuantidade,
} from '../../src/processPendingItems';

import {
  allPedidos,
  itensPendentes,
  notaNIExistAndMaior, notaNIExistAndSmaller, notaNINotExist, outDiferencaQuantity,
  outGetTotalQuantidade, outPedidosAgrupados, outProcessaItensPendentes, pedido, pedidos, pendentes,
} from '../../mocks/processPendingItems.mock';

describe('Teste de unidade processPendingItems', function () {
  describe('Casos de sucesso', function () {
    it('função agruparPorPedido agrupa por pedido', async function () {
      const agrupadosPorPedido = await agruparPorPedido(pedidos);

      expect(agrupadosPorPedido).toStrictEqual(outPedidosAgrupados);
    });

    it('função getTotalQuantidade soma o quantidade total de cada item', function () {
      const itensETotalQuantidade = getTotalQuantidade(outPedidosAgrupados);

      expect(itensETotalQuantidade).toStrictEqual(outGetTotalQuantidade);
    });

    it(
      'função compareQuantidades verifica a diferença de quantidade na nota para o pedido',
      function () {
        const quantitySmaller = compareQuantidades(pedido, notaNIExistAndSmaller);
        const quantityEqual = compareQuantidades(pedido, notaNINotExist);

        expect(quantitySmaller).toStrictEqual(outDiferencaQuantity);
        expect(quantityEqual).toBe(null);
      },
    );

    it('função getPendentes retorna todos os itens pendentes', function () {
      getPendentes(allPedidos, outGetTotalQuantidade, pendentes);

      expect(pendentes).toStrictEqual(itensPendentes);
    });

    it('função processaItensPendentes retorna todos os itens pendentes', async function () {
      const itemsPendentes = await processaItensPendentes();

      expect(itemsPendentes).toStrictEqual(outProcessaItensPendentes);
    });
  });

  describe('Casos de lançamento de exceção', function () {
    it(
      'função compareQuantidades deve lançar uma exceção se a nota for maior que pedido',
      function () {
        expect(() => compareQuantidades(pedido, notaNIExistAndMaior))
          .toThrow('Nota emitida com numero de quantidade maior do que o pedido');
      },
    );
  });
});
