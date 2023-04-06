export default ItensPedidoModel = (sequelize, DataTypes) => {
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
      autoIncrement: true,
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
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'valor_unitário_produto',
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
      ItensPedido.belongsTo(models.User, 
        { foreignKey: 'idPedido', as: 'NaTabelaItens' });
     };

  return ItensPedido;
};
