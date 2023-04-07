const { itensNota } = require('../data/seeds');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('itens_nota', itensNota, { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('itens_nota', null, {});
  },
};
