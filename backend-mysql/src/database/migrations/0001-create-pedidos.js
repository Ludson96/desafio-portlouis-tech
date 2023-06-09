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
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cliente: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valorTotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'valor_total',
    },
    saldoValor: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'saldo_valor',
    },
  }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('pedidos'),
};