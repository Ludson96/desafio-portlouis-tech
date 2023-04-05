export default PedidosModel = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
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
      type: DataTypes.FLOAT(5, 2),
      allowNull: false,
      field: 'valor_unitário_produto',
    },
  }, { timestamps: false, tableName: 'pedidos', underscored: true });

  return Pedidos;
};
