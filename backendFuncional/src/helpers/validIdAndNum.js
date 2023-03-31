export default function verificarDuplicatas(notas) {
  const duplicatasEncontradas = notas.some((nota, index) => {
    return notas.findIndex((item) => item.id_pedido === nota.id_pedido && item.número_item === nota.número_item) !== index;
  });

  if (duplicatasEncontradas) {
    throw new Error(`Par de id_pedido e número_item já existe`);
  }

  return false;
}
