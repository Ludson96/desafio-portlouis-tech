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
      field: 'número_item',
    },
    codigoProduto: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'código_produto',
    },
    quantidadeProduto: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'quantidade_produto',
    },
    valorUnitarioProduto: {
      type: Sequelize.DECIMAL(10, 2),
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