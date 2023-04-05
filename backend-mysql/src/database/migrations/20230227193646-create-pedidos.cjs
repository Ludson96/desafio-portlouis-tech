module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numeroItem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'número_item',
      },
      codigoProduto: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'código_produto',
      },
      quantidadeProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantidade_produto',
      },
      valorUnitarioProduto: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'valor_unitário_produto',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('pedidos');
  }
}