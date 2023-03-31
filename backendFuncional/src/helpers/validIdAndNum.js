export default async function validIdAndNum(todasNotas, nota, id, index) {
  const isItemValid = todasNotas.some((item) => {
    item.número_item === nota.número_item && item.id_pedido === nota.id_pedido;
  });

  if (!isItemValid) {
    throw new Error(`Par de id_pedido e número_item inexistente: ${index + 1} do arquivo ${id}`);
  }
}
