module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('pedidos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    cliente: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valorTotal: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'valor_total',
    }
  }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('pedidos'),
};