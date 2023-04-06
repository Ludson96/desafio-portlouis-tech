module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('itens_nota', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idNota: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'id_nota',
      references: {
        model: 'notas',
        key: 'id'
      }
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
    numeroItem: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'número_item',
    },
    quantidadeProduto: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'quantidade_produto',
    },
  }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('itens_nota'),
};