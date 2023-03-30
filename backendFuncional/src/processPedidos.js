import fs from 'fs';
import path from 'path';
import validInputs from './helpers/validInputsPedidos.js';

function lerPedidosDiretorio(diretorio) {
  const arquivos = fs.readdirSync(diretorio);

  const pedidos = arquivos
    .map((arquivo) => {
      const id = path.parse(arquivo).name;
      const conteudo = fs.readFileSync(path.join(diretorio, arquivo), 'utf8');

      return conteudo
        .split('\n')
        .map((linha) => {
          if (!linha.trim()) return null;

          try {
            const pedido = JSON.parse(linha);

            validInputs(pedido, id, linha);

            return {
              número_item: pedido.número_item,
              código_produto: pedido.código_produto,
              quantidade_produto: pedido.quantidade_produto,
              valor_unitário_produto: parseFloat(pedido.valor_unitário_produto.replace(',', '.')),
            };
          } catch (error) {
            console.error(`Pedido inválido no arquivo ${id}: ${linha}`);
            return null;
          }
        })
        .filter(Boolean)
        .reduce((acc, cur) => {
          const index = acc.findIndex((item) => item.número_item === cur.número_item);
          if (index === -1) {
            acc.push({ número_item: cur.número_item, pedidos: [cur] });
          } else {
            acc[index].pedidos.push(cur);
          }
          return acc;
        }, [])
        .map((item) => {
          return { id, pedidos: item.pedidos };
        });
    })
    .flat()
    .filter(Boolean);

  const numeroItens = new Set(pedidos.map((pedido) => pedido.pedidos[0].número_item));
  if (pedidos.length !== numeroItens.size || numeroItens.has(null) || !numeroItens.has(1) || !numeroItens.has(Math.max(...numeroItens))) {
    console.error('Pedidos inválidos');
  }

  return pedidos;
}

const pedidos = lerPedidosDiretorio('./src/data/Pedidos');
// fs.writeFileSync('./src/data/readAllPedidos.txt', JSON.stringify(pedidos, null, 2));






