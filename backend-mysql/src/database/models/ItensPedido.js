module.exports = ItensPedidoModel = (sequelize, DataTypes) => {
  const ItensPedido = sequelize.define('ItensPedido', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    numeroItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'número_item',
    },
    codigoProduto: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'código_produto',
    },
    quantidadeProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'quantidade_produto',
    },
    valorUnitarioProduto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      field: 'valor_unitário_produto',
    },
    valorTotalUnitario: {
      type: DataTypes.VIRTUAL,
      field: 'valor_total_unitário',
      get() {
        return this.getDataValue('quantidade_produto') * this.getDataValue('valor_unitário_produto');
      },
    },
    idPedido: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
    {
      timestamps: false,
      tableName: 'itens_pedido',
      underscored: true
    });

    ItensPedido.associate = (models) => {
      ItensPedido.belongsTo(models.Pedidos, 
        { foreignKey: 'idPedido', as: 'NaTabelaItens' });
     };

  return ItensPedido;
};
