module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('notas', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    vendedor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('notas'),
};