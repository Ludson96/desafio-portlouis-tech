// const result = await Pedido.findAll({
//   where: { id: 1 },
//   include: [
//     {
//       model: ItensPedido,
//       as: 'ItensPedido',
//       attributes: ['numeroItem', 'codigoProduto', 'quantidadeProduto', 'valorUnitarioProduto'],
//     },
//     {
//       model: Nota,
//       as: 'Notas',
//       attributes: ['id', 'idPedido'],
//       include: [
//         {
//           model: NotasItens,
//           as: 'notasItens',
//           attributes: ['numeroItem', 'quantidadeProduto'],
//         },
//       ],
//     },
//   ],
// });

// const pedido = result[0].get({ plain: true });

// const itensPendentes = pedido.ItensPedido.filter((itemPedido) => {
//   const itemNota = pedido.Notas[0].notasItens.find(
//     (item) => item.numeroItem === itemPedido.numeroItem
//   );

//   if (!itemNota) {
//     return true;
//   }

//   const quantidadePendente = itemPedido.quantidadeProduto - itemNota.quantidadeProduto;

//   return quantidadePendente > 0;
// });

// console.log(itensPendentes);
