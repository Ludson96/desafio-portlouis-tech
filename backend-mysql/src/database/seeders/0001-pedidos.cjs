const { pedidos } = require('../data/allPedidos.cjs');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('pedidos', pedidos, { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
