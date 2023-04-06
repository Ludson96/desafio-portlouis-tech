const { notas } = require('../data/allPedidos');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('notas', notas, { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('notas', null, {});
  },
};
