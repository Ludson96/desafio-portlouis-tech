import validInputs from './middleware/validInputsPedidos';
const fs = require('fs');
const path = require('path');

function lerNotasDiretorio(diretorio) {
  const arquivos = fs.readdirSync(diretorio);

  const notas = arquivos.map((arquivo) => {
    const id = path.parse(arquivo).name;
    const conteudo = fs.readFileSync(path.join(diretorio, arquivo), 'utf8');

    return conteudo.split('\n').map((linha) => {
      if (!linha.trim()) return null;

      try {
        const notas = JSON.parse(linha);
        validInputs(notas, id, linha);
        return {
          id,
          id_pedido: notas.id_pedido,
          número_item: notas.número_item,
          quantidade_produto: notas.quantidade_produto,
        };
      } catch (error) {
        // Poderíamos criar uma exceção com throw, mas isso interromperia o código e não seria possível prosseguir.
        // throw new Error(`Pedido inválido no arquivo ${id}: ${linha}`);
        console.error(`Nota inválido no arquivo ${id}: ${linha}`);
        console.error(error);
      }
    });
  }).flat().filter(Boolean);

  const numeroItens = new Set(notas.map((nota) => nota.número_item));
  if (notas.length !== numeroItens.size || numeroItens.has(null) || !numeroItens.has(1) || !numeroItens.has(Math.max(...numeroItens))) {
    // Poderíamos criar uma exceção com throw, mas isso interromperia o código e não seria possível prosseguir.
    // throw new Error('Pedidos inválidos');
    console.error('Pedidos inválidos');
  }

  fs.writeFile('./backend/src/data/readAllNotas', notas);
  return notas;
}

const pedidos = lerNotasDiretorio('./backend/src/data/Pedidos');
console.log(pedidos);
