const { itensPedido } = require('../data/seeds');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('itens_pedido', itensPedido, { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('itens_pedido', null, {});
  },
};
