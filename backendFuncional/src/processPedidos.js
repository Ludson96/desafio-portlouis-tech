import fs from 'fs';
import path from 'path';
import validInputs from './helpers/validInputsPedidos.js';
import checkAscendingSequence from './helpers/checkAscendingSequence.js'

async function lerPedidosDiretorio(diretorio) {
  const arquivos = fs.readdirSync(diretorio);

  const pedidos = await Promise.all(arquivos.map(async (arquivo) => {
    const id = path.parse(arquivo).name;
    const conteudo = fs.readFileSync(path.join(diretorio, arquivo), 'utf8');

    let todosPedidos = [];

    const resultado = await Promise.all(
      conteudo
        .replace(/\r\n|\r|\n/g, '\r\n') // adiciona quebra de linha no final de cada linha
        .trim() // remove espaços em branco no início e no final
        .split('\r\n') // divide em um array de linhas
        .map(async (linha, index) => {
          if (!linha.trim()) return null;

          try {
            const pedido = JSON.parse(linha);

            pedido.valor_unitário_produto = parseFloat(pedido.valor_unitário_produto.replace(',', '.')).toFixed(2);


            validInputs(pedido, id, linha);

            if (todosPedidos.some(item => item.número_item === pedido.número_item)) {
              throw new Error(`Numero item já existe ${index + 1} do arquivo ${id}`);
            }

            return {
              número_item: pedido.número_item,
              código_produto: pedido.código_produto,
              quantidade_produto: pedido.quantidade_produto,
              valor_unitário_produto: pedido.valor_unitário_produto,
            };
          } catch (error) {
            console.error(error.message)
            throw new Error(`Erro ao fazer parse da linha ${index + 1} do arquivo ${id}`);
          }
        })
    );

    todosPedidos = resultado.filter(item => item !== null);
    checkAscendingSequence(todosPedidos)
    const resultFinal = { id, pedidos: todosPedidos}
    console.log("🚀 ~ file: processPedidos.js:51 ~ pedidos ~ resultFinal:", resultFinal)
    return resultFinal;
  }));

  return pedidos;
}

const pedidos = await lerPedidosDiretorio('./src/data/Pedidos');
fs.writeFileSync('./src/data/readAllPedidos.txt', JSON.stringify(pedidos, null, 2));
