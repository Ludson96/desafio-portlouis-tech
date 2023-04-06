const pedido1 = require('../data/allPedidos.cjs');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('pedidos', [{
      id: '5',
      número_item: 6,
      código_produto: 'YY6',
      quantidade_produto: 10,
      valor_unitário_produto: '15.90',
    },
    {
      id: '5',
      número_item: 7,
      código_produto: 'T19',
      quantidade_produto: 7,
      valor_unitário_produto: '21.00',
    },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
