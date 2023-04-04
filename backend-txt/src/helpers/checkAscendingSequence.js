export default function checkAscendingSequence(conteudo) {
  conteudo.sort((a, b) => a.número_item - b.número_item);

  let valorEsperado = 0;

  for (let i = 0; i < conteudo.length; i += 1) {
    if (conteudo[i]['número_item'] !== valorEsperado + 1) {
      throw new Error('Número do item não segue sequência crescente');
    }
    valorEsperado += 1;
  }

  return true;
}
