import fs from 'fs';
import path from 'path';
import validInputsNotas from './helpers/validInputsNotas.js';
import validIdAndNum from './helpers/validIdAndNum.js';

async function lerNotasDiretorio() {
  const arquivos = fs.readdirSync('./src/data/Notas');

  const notas = await Promise.all(arquivos.map(async (arquivo) => {
    const id = path.parse(arquivo).name;
    const conteudo = fs.readFileSync(path.join('./src/data/Notas', arquivo), 'utf8');

    const todasNotas = [];

    await Promise.all(
      conteudo
        .replace(/\r\n|\r|\n/g, '\r\n') // adiciona quebra de linha no final de cada linha
        .trim() // remove espaços em branco no início e no final
        .split('\r\n') // divide em um array de linhas
        .map(async (linha, index) => {
          if (!linha.trim()) return null;

          try {
            const nota = JSON.parse(linha);

            nota.id_pedido = nota.id_pedido.toString();

            validInputsNotas(nota, id, linha);
            console.log('🚀 ~ file: processNotas.js:36 ~ .map ~ todasNotas:', todasNotas);
            validIdAndNum(todasNotas, nota, id, index);

            todasNotas.push({
              id_pedido: nota.id_pedido,
              número_item: nota.número_item,
              quantidade_produto: nota.quantidade_produto,
            });
          } catch (error) {
            console.error(error.message);
            throw new Error(`Erro linha: ${index + 1} do arquivo ${id}`);
          }
        }),
    );

    const resultFinal = { id, notas: todasNotas };
    return resultFinal;
  }));

  return notas;
}

const pedidos = lerNotasDiretorio();
fs.writeFileSync('./src/data/readAllNotas.txt', JSON.stringify(pedidos, null, 2));
