module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('itens_pedido', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numeroItem: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
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
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'valor_unitário_produto',
    },
    idPedido: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'id_pedido',
      references: {
        model: 'pedidos',
        key: 'id',
      }
    },
  }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('itens_pedido'),
};