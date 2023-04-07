const { pedidos } = require('../data/seeds');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('pedidos', pedidos, { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('pedidos', null, {});
  },
};
