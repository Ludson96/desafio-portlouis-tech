import fs from 'fs';
import path from 'path';
import validInputsNotas from './helpers/validInputsNotas.js';

async function lerNotasDiretorio() {
  const arquivos = fs.readdirSync('./src/data/Pedidos');

  const notas = await Promise.all(arquivos.map(async (arquivo) => {
    const id = path.parse(arquivo).name;
    const conteudo = fs.readFileSync(path.join('./src/data/Pedidos', arquivo), 'utf8');

    let todasNotas = [];

    await Promise.all(
      conteudo
        .replace(/\r\n|\r|\n/g, '\r\n') // adiciona quebra de linha no final de cada linha
        .trim() // remove espaços em branco no início e no final
        .split('\r\n') // divide em um array de linhas
        .map(async (linha, index) => {
          if (!linha.trim()) return null;

          try {
            const nota = JSON.parse(linha);

            validInputsNotas(nota, id, linha);

            // if (todasNotas.some(item => item.id_pedido === nota.id_pedido)) {
            //   throw new Error(`id_pedido já existe ${index + 1} do arquivo ${id}`);
            // }

            todasNotas.push({
              número_item: nota.número_item,
              código_produto: nota.código_produto,
              quantidade_produto: nota.quantidade_produto,
              valor_unitário_produto: nota.valor_unitário_produto,
            })

          } catch (error) {
            console.error(error.message)
            throw new Error(`Erro linha: ${index + 1} do arquivo ${id}`);
          }
        })
    );

    const resultFinal = { id, pedidos: todasNotas}
    return resultFinal;
  }));

  return notas;
}

const pedidos = await lerNotasDiretorio('./src/data/Pedidos');
fs.writeFileSync('./src/data/readAllPedidos.txt', JSON.stringify(pedidos, null, 2));
