import fs from 'fs';
import path from 'path';
import validInputsNotas from './helpers/validInputsNotas.js';
import verificarDuplicatas from './helpers/validIdAndNum.js';

function addNotas(linha, id, todasNotas, index) {
  try {
    const nota = JSON.parse(linha);

    nota.id_pedido = nota.id_pedido.toString();

    validInputsNotas(nota, id, linha);

    todasNotas.push({
      id_pedido: nota.id_pedido,
      número_item: nota.número_item,
      quantidade_produto: nota.quantidade_produto,
    });
  } catch (error) {
    console.error(error.message);
    throw new Error(`Erro linha: ${index + 1} do arquivo ${id}`);
  }
}

async function agruparTodasNotas(conteudo, id, todasNotas) {
  await Promise.all(
    conteudo
      .replace(/\r\n|\r|\n/g, '\r\n') // adiciona quebra de linha no final de cada linha
      .trim() // remove espaços em branco no início e no final
      .split('\r\n') // divide em um array de linhas
      .map(async (linha, index) => {
        if (!linha.trim()) return null;

        addNotas(linha, id, todasNotas, index);
      }),
  );
}

export default async function lerNotasDiretorio() {
  const arquivos = fs.readdirSync('./src/data/Notas');

  const notas = await Promise.all(arquivos.map(async (arquivo) => {
    const id = path.parse(arquivo).name;
    const conteudo = fs.readFileSync(path.join('./src/data/Notas', arquivo), 'utf8');

    const todasNotas = [];

    agruparTodasNotas(conteudo, id, todasNotas);

    const resultFinal = { id, notas: todasNotas };
    verificarDuplicatas(todasNotas);
    return resultFinal;
  }));

  return notas;
}
