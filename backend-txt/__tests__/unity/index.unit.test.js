import fs from 'fs';
import path from 'path';

import { filterPedidos, getAllPedidosPendentes, savePedidos } from '../../src/index.js';

import {
  allPedidos, pedidosPendentes, itemsPendentes, outGetAllPedidosPendentes,
} from '../../mocks/index.mock';

describe('Teste de unidade index', function () {
  describe('Casos de sucesso', function () {
    it('função getAllPedidosPendentes pega todos os pedidos pendentes', async function () {
      const allPedidosPendentes = await getAllPedidosPendentes(allPedidos, itemsPendentes);

      expect(allPedidosPendentes).toStrictEqual(outGetAllPedidosPendentes);
    });

    it('função filterPedidos filtra pedidos zerados', async function () {
      const pendentesFiltered = filterPedidos(pedidosPendentes);

      expect(pendentesFiltered).toStrictEqual(outGetAllPedidosPendentes);
    });

    it('função savePedidos salva os pedidos pendentes em um arquivo de texto', async function () {
      savePedidos(outGetAllPedidosPendentes);
      const filePath = path.join(__dirname, '../../src/data/pedidosPendentes.txt');

      const isExist = fs.existsSync(filePath);

      expect(isExist).toBe(true);
    });
  });
});
