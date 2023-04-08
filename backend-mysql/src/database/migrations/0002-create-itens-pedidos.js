module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('itens_pedido', {
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
      quantidadeProdutoPendente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantidade_produto_pendente',
      },
      valorUnitarioProduto: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: 'valor_unitário_produto',
      },
      valorTotalUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        field: 'valor_total_unitário',
        allowNull: false,
        defaultValue: 0.00
      },
      valorTotalPendenteUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        field: 'valor_total_unitário',
        allowNull: false,
        defaultValue: 0.00
      },
      idPedido: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'id_pedido',
        references: {
          model: 'pedidos',
          key: 'id',
        },
      },
    }),

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('itens_pedido');
  },
};
