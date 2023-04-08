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
    quantidadeProdutoPendente: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'quantidade_produto_pendente',
    },
    valorUnitarioProduto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'valor_unitário_produto',
    },
    valorTotalUnitario: {
      type: DataTypes.VIRTUAL,
      field: 'valor_total_unitário',
      get() {
        return this.getDataValue('quantidadeProduto') * this.getDataValue('valorUnitarioProduto');
      },
    },
    valorTotalPendenteUnitario: {
      type: DataTypes.VIRTUAL,
      field: 'valor_total_unitário',
      get() {
        return this.getDataValue('quantidadeProdutoPendente') * this.getDataValue('valorUnitarioProduto');
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
