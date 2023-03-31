export default function checkAscendingSequence(conteudo) {
  conteudo.sort((a, b) => {
    return a.número_item - b.número_item
  })
  console.log("🚀 ~ file: checkAscendingSequence.js:3 ~ checkAscendingSequence ~ conteudo:", conteudo)
  
  let valorEsperado = 0;

  for (let i = 0; i < conteudo.length; i += 1) {
    if (conteudo[i]["número_item"] !== valorEsperado + 1) {
      throw new Error('Número do item não segue sequência crescente');
    }
    valorEsperado += 1;
  }

  const numeroItensDuplicados = conteudo.filter((item, index) => {
    return index !== conteudo.length - 1 && item.número_item === conteudo[index + 1].número_item;
  });

  if (numeroItensDuplicados.length > 0) {
    throw new Error(`Número do item ${numeroItensDuplicados[0].número_item} duplicado`);
  }

  return true;
}
